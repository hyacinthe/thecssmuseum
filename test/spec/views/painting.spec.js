define(["views/painting","models/Painting"],function(PaintingView,Painting){

    describe("Views : Painting", function(){

        var template = "templates/gallery/purple/template.html", 
            painting = new Painting({
                "template" : template,
                "name" : "Purple",
                "author" : "Ellsworth Kelly",
                "museum" : "National Gallery Of Art",
                "city" : "Washington D.C.",
                "country" : "U.S.A.",
                "year" : 2001
            });

        describe("module", function(){

            it("can be imported", function(){
                expect(PaintingView).to.be.ok;
            });

            it("exports Painting", function(){
                expect(PaintingView).to.respondTo("Painting");
            });

            it("exports create", function(){
                expect(PaintingView).to.respondTo("create");
            });
        });

        describe("create", function(){

            it("requires a model", function(){

                var fn = function(){
                    PaintingView.create();
                };

                expect(fn).to.throw("Model required");
            });

            it("returns a view with model set", function(){

                var v = PaintingView.create(painting);

                expect(v).to.be.ok;
                expect(v.model).to.equal(painting);

            });

        });

        describe("Painting", function(){

            afterEach(function(){
                if(typeof require.restore !== 'undefined'){
                    require.restore();
                }
            });

            it("loads template using require", function(done){

                sinon.stub(window,"require",function(deps,callback){
                    expect(deps.length).to.equal(1);
                    expect(deps[0]).to.equal("text!"+template);
                    done();
                });

                new PaintingView.Painting({ model : painting});

            });

        });

    });

});