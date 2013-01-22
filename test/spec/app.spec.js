define(["app","models/gallery", "models/painting", "./mocks/paintings", "underscore", "views/gallery"],

    function(Application,Gallery,Painting,PaintingData,_,GalleryView){

        describe('Application', function () {

            describe('module', function () {
                it('can be imported', function() {
                    expect(Application).to.be.ok;
                });

                it('exports run', function(){
                    expect(Application).to.respondTo('run');
                });
            });

            describe('run', function(){

                afterEach(function(){
                    if(typeof Gallery.get.restore !== 'undefined'){
                        Gallery.get.restore();
                    }

                    if(typeof GalleryView.create.restore !== 'undefined'){
                        GalleryView.create.restore();
                    }
                });

                it('loads gallery data using gallery data module', function(done){
                    sinon.stub(Gallery,'get', function(){
                        done();
                    });

                    Application.run();
                });

                it('passes loaded gallery data to gallery view through create', function(done){

                    sinon.stub(Gallery,'get', function(){
                        var paintings = [];
                        _.each(PaintingData, function(p){
                            paintings.push(new Painting(p));
                        });
                        return paintings;
                    });

                    sinon.stub(GalleryView,'create', function(paintings){

                        expect(paintings.length).to.equal(PaintingData.length);

                        _.each(paintings, function(p,i){
                            expect(p.toJSON()).to.deep.equal(PaintingData[i])
                        });

                        done();
                    });

                    Application.run();
                });
            });
        });

    }
);
