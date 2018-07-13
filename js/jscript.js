$(document).ready(function(){

    var navOffset = $("#nav").offset().top;


    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        
        if (scrollPos >= navOffset) {
            $("#nav").addClass("fixed");
        } else {
            $("#nav").removeClass("fixed")
        }
    });

});
/* nav bar */
$(document).ready(function(){

    var target = $(".my-skil").offset().top;

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        
        if (scrollPos = target){
            $(".my-skil").addClass("my-skil-ani");
        } else {
            $(".my-skil").removeClass("my-skil-ani");
        }
   
    });
});

$(document).ready(function(){

    var target = $(".html-css-js-logo").offset().top;

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        
        if (scrollPos = target){
            $(".html-css-js-logo").addClass("html-css-js-logo-anim");
        } else {
            $(".html-css-js-logo").removeClass("html-css-js-logo-anim");
        }
   
    });
});
/* about me */