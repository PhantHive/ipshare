$(document).ready(function(){

    var buttons = ".buttons .nav-link:nth-child";

    $( buttons + '(1) .icon').hover(
        //  hover function
        function(){
            $(this).css({
                "border-radius" : "30px",
                "padding" : "20px 10px"
            });
            if(true){
                $( buttons + '(1) .icon-text').css({
                    "width" : "130px",
                    "padding" : "6px 39px"
                });
            }
        },

        // hover out function
        function(){
            $(this).css({
                "border-radius" : "20px 10px",
                "padding" : "10px 13px"
            });

            $(buttons + '(1) .icon-text').css({
                "width" : "0px",
                "padding" : "6px 0px"
            });

        });

    // Instagram

    $( buttons + '(2) .icon').hover(
        //  hover function
        function(){
            $(this).css({
                "border-radius" : "30px",
                "padding" : "20px 10px"
            });
            if(true){
                $( buttons + '(2) .icon-text').css({
                    "width" : "130px",
                    "padding" : "6px 35px"
                });
            }
        },

        // hover out function
        function(){
            $(this).css({
                "border-radius" : "20px 10px",
                "padding" : "10px 13px"
            });

            $(buttons + '(2) .icon-text').css({
                "width" : "0px",
                "padding" : "6px 0px"
            });

        });


    // LinkedIn
    $( buttons + '(3) .icon').hover(
        //  hover function
        function(){
            $(this).css({
                "border-radius" : "30px",
                "padding" : "20px 10px"
            });
            if(true){
                $( buttons + '(3) .icon-text').css({
                    "width" : "130px",
                    "padding" : "6px 39px"
                });
            }
        },

        // hover out function
        function(){
            $(this).css({
                "border-radius" : "20px 10px",
                "padding" : "10px 13px"
            });

            $(buttons + '(3) .icon-text').css({
                "width" : "0px",
                "padding" : "6px 0px"
            });

        });


    // Pinterest
    $( buttons + '(4) .icon').hover(
        //  hover function
        function(){
            $(this).css({
                "border-radius" : "30px",
                "padding" : "20px 10px"
            });
            if(true){
                $( buttons + '(4) .icon-text').css({
                    "width" : "130px",
                    "padding" : "6px 39px"
                });
            }
        },

        // hover out function
        function(){
            $(this).css({
                "border-radius" : "20px 10px",
                "padding" : "10px 13px"
            });

            $(buttons + '(4) .icon-text').css({
                "width" : "0px",
                "padding" : "6px 0px"
            });

        });

});