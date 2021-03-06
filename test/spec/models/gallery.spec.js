define(["models/gallery","underscore", "../mocks/paintings"],function(Gallery,_,paintingData){

    describe("Models : Gallery", function(){

        describe("common sense", function(){
            it("one equals one", function(){
                expect(1).to.equal(1);
            });
        });

        describe("module", function(){
            it("can be imported", function(){
                expect(Gallery).to.be.ok;
            });

            it("exports get", function(){
                expect(Gallery).to.respondTo('get');
            });
        });

        describe("get", function(){

            afterEach(function(){
                if(typeof require.restore !== 'undefined'){
                    require.restore();
                }
            });

            it("attempts to load data with require using dataPath provided", function(done){

                var dataUri = "data/gallery.json";

                sinon.stub(window,'require',function(dependencies, callback){
                    expect(dependencies.length).to.equal(1);
                    expect(dependencies[0]).to.equal("text!" + dataUri);
                    done();
                });

                Gallery.get(dataUri);

            });

            it("loads data in data/gallery.json by default", function(done){

                sinon.stub(window,'require',function(dependencies, callback){
                    expect(dependencies.length).to.equal(1);
                    expect(dependencies[0]).to.equal("text!" + "data/gallery.json");
                    done();
                });

                Gallery.get();
            });

            it("returns a list of Painting models", function(done){

                $.when(Gallery.get()).done(function(paintings){


                    expect(paintings.length).to.equal(paintingData.length);

                    _.each(paintings, function(p,i){
                        //resulting template value is a combination of
                        //base path + original template
                        expect(p.get("template").indexOf(paintingData[i].template))
                            .to.not.equal(-1);
                        expect(p.get("name")).to.equal(paintingData[i].name);
                        expect(p.get("author")).to.equal(paintingData[i].author);
                        expect(p.get("year")).to.equal(paintingData[i].year);
                        expect(p.get("museum")).to.equal(paintingData[i].museum);
                        expect(p.get("city")).to.equal(paintingData[i].city);
                        expect(p.get("country")).to.equal(paintingData[i].country);
                    });

                    done();

                });

            });
        });

    });

});
