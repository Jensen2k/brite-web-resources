// /*
// $( document )
//   .on( "mousemove", ".case-study-wrap", function( event ) {
//     if(window.Modernizr.touch)
//         return;

//     var offset = $(this).offset();

//     /**
//      * Half of the `ItemCard` width
//      * @type {integer}
//      */
//     var halfW = ( this.clientWidth / 2 );
 
//     /**
//      * Half of the `ItemCard` height
//      * @type {integer}
//      */
//     var halfH = ( this.clientHeight / 2 );
//     /**
//      * Mouse cursor X coordinate
//      * @type {integer}
//      */
//     var coorX = ( halfW - ( event.pageX - offset.left ) );
 
//     /**
//      * Mouse cursor Y coordinate
//      * @type {integer}
//      */
//     var coorY = ( halfH - ( event.pageY - offset.top ) );

//     /**
//      * X Rotation degree of `ItemCard`
//      * @type {integer}
//      */
//     var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
//     var degX2  = ( ( coorY / halfH ) * 5 ) + 'deg'; // max. degree = 10
//     /**
//      * Y Rotation degree of `ItemCard`
//      * @type {integer}
//      */
//     var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10
//     var degY2  = ( ( coorX / halfW ) * -5 ) + 'deg'; // max. degree = 10
//     var degY3 = ( ( ( coorX / halfW ) * 5 ) + -2.2) + 'deg';

//     /**
//      * Add the inline styles
//      */
//     $( this ).css( 'transform', function() {
 
//         return 'perspective( 1200px ) translate3d( 0, -2px, 0 )  rotateX('+ degX +') rotateY('+ degY +')';
//       } )
//       .find( '.w-row' )
//         .css( 'transform', function() {
//           return 'perspective( 1200px ) translate3d( 0, 0, 0px ) rotateX('+ (degX2) +') rotateY('+ (degY2) +')';
//         } );

//   } )
//   .on( "mouseout", ".case-study-wrap", function() {
//      /**
//        * Remove the inline styles
//        */
//       $( this ).removeAttr( 'style' )
//         .find( '.row' )
//           .removeAttr( 'style' );
//   } );


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

    if(height > 1) {
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