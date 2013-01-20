define(["models/gallery"],function(Gallery){

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

            it("returns gallery configuration", function(done){
                $.when(Gallery.get()).done(function(data){
                    expect(data).to.be.ok;
                    expect(data.base).to.be.ok;
                    expect(data.art).to.be.ok;
                    done();
                });
            });

        });

    });

});