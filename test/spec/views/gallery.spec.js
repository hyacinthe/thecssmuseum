define(["underscore", "views/gallery", "views/painting", "models/painting", "../mocks/paintings"],

    function(_,GalleryView,PaintingView,Painting,Paintings){

        describe("Views : Gallery", function(){

            describe("module", function(){

                it("can be imported", function(){
                    expect(GalleryView).to.be.ok;
                });

                it("exports create", function(){
                    expect(GalleryView).to.respondTo('create');
                });

                it("exports Gallery", function(){
                    expect(GalleryView).to.respondTo('Gallery');
                });

            });

            describe("Gallery", function(){

                afterEach(function(){
                    if(typeof PaintingView.create.restore !== 'undefined'){
                        PaintingView.create.restore();
                    }
                });

                it("requires models", function(){

                    var fn = function(){
                        new GalleryView.Gallery();
                    };

                    expect(fn).to.throw("models required");
                });

                it("has a render method", function(){
                    expect(GalleryView.Gallery).to.respondTo("render");
                });

                it("creates painting views based on the gallery data", function(done){
                    var paintings = _.map(Paintings, function(p){ 
                        p.template = "templates/gallery/" + p.template; 
                        return new Painting(p); 
                    }), usedPaintings = [];

                    sinon.stub(PaintingView,"create", function(p){
                        usedPaintings.push(p);
                        if(usedPaintings.length === paintings.length){
                            
                            _.each(paintings, function(p){
                                expect(
                                    _.find(usedPaintings,function(up){
                                        return up.get("name") === p.get("name"); 
                                    })
                                ).to.be.ok;
                            });

                            done();
                        }
                    });

                    GalleryView.create(paintings);

                });

            });

            describe("create", function(){
                it("requires a list of models", function(){

                    var fn = function(){
                        GalleryView.create();
                    };

                    expect(fn).to.throw("Paintings required");

                });
            });

        });

    }
);
