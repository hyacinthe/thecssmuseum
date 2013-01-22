define(["views/painting"],function(PaintingView){

    describe("Views : Painting", function(){

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

    });

});