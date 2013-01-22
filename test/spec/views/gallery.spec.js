define(["views/gallery"],function(GalleryView){

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

        describe("create", function(){
            it("create requires a list of models", function(){

                var fn = function(){
                    GalleryView.create();
                };

                expect(fn).to.throw("Paintings required");

            });
        });
    
    });

});