

$(window).scroll(function() {    // this will work when your window scrolled.


    var height = $(window).scrollTop();  //getting the scrolling height of window
    var offset = 300;
    var wrapper = $(".nav-wrapper");
    var navHeight = wrapper.height();
    var sections = $(".content-section");
    sections.each(function(index, section) {
        if(($(window).scrollTop() >= $(section).offset().top - offset)
            && ($(window).scrollTop() <= ($(section).offset().top + $(section).height() - offset))) {
            $("ul.mobile-menu").css({top: (-60*(index+1))});
            $(".navbar [data-section='"+$(section).attr("data-section")+"']").addClass("active");
        } else {
            $(".navbar [data-section='"+$(section).attr("data-section")+"']").removeClass("active");
        }
        
    });

    if($(window).scrollTop() <= $(sections[0]).offset().top - offset) {
        $("ul.mobile-menu").css({top: 0});
    }

    if(height > 95) {
        wrapper.addClass("scrolled");
    } else{
        wrapper.removeClass("scrolled");
    }
});


$("a.tracked").click(function(e) {
    if (!ga.q) {
      var url = $(this).attr("href");
      ga("send", "event", "outbound", "click", url, {"hitCallback":
        function () {
          document.location = url;
        }
      });
      e.preventDefault();
    }
  });
