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

$(function() {
 
    $(document.body).on('appear', '.my-skil', function(e, $affected) {
 
    $(this).addClass("my-skil-ani");
  });
  $('.my-skil').appear({force_process: true});
 
});

$(function() {
 
    $(document.body).on('appear', '.html-css-js-logo', function(e, $affected) {
 
    $(this).addClass("html-css-js-logo-anim");
  });
  $('.html-css-js-logo').appear({force_process: true});
 
});

/* about me */

$(function() {
 
    $(document.body).on('appear', '.my-jobs', function(e, $affected) {
 
    $(this).addClass("my-jobs-anim");
  });
  $('.my-jobs').appear({force_process: true});
 
});

$(function() {
 
    $(document.body).on('appear', '.my-jobs-site-obmin', function(e, $affected) {
 
    $(this).addClass("my-jobs-site-anim");
  });
  $('.my-jobs-site-obmin').appear({force_process: true});
 
});

/* portaolio */



/* function onScrollInit( items, elemTrigger ) {
    var offset = $(window).height() / 1.6
    items.each( function() {
      var elem = $(this),
          animationClass = elem.attr('data-animation'),
          animationDelay = elem.attr('data-delay');

          elem.css({
            '-webkit-animation-delay':  animationDelay,
            '-moz-animation-delay':     animationDelay,
            'animation-delay':          animationDelay
          });

          var trigger = (elemTrigger) ? trigger : elem;

          trigger.waypoint(function() {
            elem.addClass('animated').addClass(animationClass);
            if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
            },{
                triggerOnce: true,
                offset: offset
          });
    });
  }

  setTimeout(function() { onScrollInit($('.waypoint')) }, 10); */

  $(function() {
 
    $(document.body).on('appear', '.mecon', function(e, $affected) {
 
    $(this).addClass("mecon-ani");
  });
  $('.mecon').appear({force_process: true});
 
});


$(function() {
 
    $(document.body).on('appear', '.right', function(e, $affected) {
 
    $(this).addClass("right-ani");
  });
  $('.right').appear({force_process: true});
 
});

$(function() {
 
    $(document.body).on('appear', '.left', function(e, $affected) {
 
    $(this).addClass("left-ani");
  });
  $('.left').appear({force_process: true});
 
});
/* bottom */

$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });
  /* up */
  $(document).ready(function(){
        $("#nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    