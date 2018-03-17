$( window ).scroll(function changeNav () {
        var wys = $(window).scrollTop();
        if(wys > 600){
            $('.navbar').css("background-color", "#b11414");
            $('.nav-item a').css("color", "white");
            
        } else {
            $('#mainNav').css("background-color", "white");
             $('.nav-item a').css("color", "#585353");
        }
    });

