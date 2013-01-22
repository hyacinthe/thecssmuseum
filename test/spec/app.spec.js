define(["app"],function(Application){

    describe('Application', function () {
        describe('module', function () {
            it('can be imported', function() {
                expect(Application).to.be.ok;
            });

            it('exports run', function(){
                expect(Application).to.respondTo('run');
            });
        });
    });

});