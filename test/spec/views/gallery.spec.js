define(["underscore", "views/gallery","models/painting"],function(_,GalleryView,Painting){

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

            it("requires models", function(){

                var fn = function(){
                    new GalleryView.Gallery();
                };

                expect(fn).to.throw("models required");
            });

            it("has a render method", function(){
                expect(GalleryView.Gallery).to.respondTo("render");
            });

            // it("", function(){

            // });

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

});
