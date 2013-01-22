(function(window,document){
    define(["jquery"], function($) {


        function testing(){
            return $("#mocha").length !== 0;
        }

        return {
            run : function(){
                $(document).ready(function(){
                    if(!testing()){
                        $("#down > h3 > a").on("mouseover", function(){
                            var marginset = $(".tableau").css("margin-right").replace(/[^-\d\.]/g, '');
                            var posgall = $("#gallery").css("margin-left").replace(/[^-\d\.]/g, '');
                            var n = posgall -500 - marginset;
                            $("#gallery").css("margin-left", n);
                        });
                    }
                });

            }
        };
    });
})(window,document);
