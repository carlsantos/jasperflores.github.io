$(document).ready(function () {
  /* SIDEBAR NAVIGATION */
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });

  /* INTERACTIVE OBJECT */
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();

  $(".jumbotron").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('.jumbotron').css("background-position", newvalueX+"px    "+newvalueY+"px");
  });

  /* WINDOWS.SCROLLTOP */
   $(window).scroll(function(){
      if ($(document).scrollTop() > 80) {
        $('.hamburger').css({"background-color":"black", "margin-left":"20%"}); 
       
      }
      else 
      {
         $('.hamburger').css({"background-color":"transparent"}); 
         $('.hamburger-container').css({"background-color":"transparent"});
      }
   });

   /* Loading Icon  */
  

  /* JQUERY WAYPOINTS */
    /* FIRST PANEL - ABOUT */
      $('.first-panel div > img').css('opacity', 0);
      $('.first-panel div > img').waypoint(function() {
          $('.first-panel  div > img').addClass('animated fadeInLeft');
      }, { offset: '70%' });

      $('.first-content').css('opacity', 0);
      $('.first-content').waypoint(function() {
          $('.first-content').addClass('animated fadeInRight');
      }, { offset: '70%' });

    /* SECOND PANEL - ABOUT */
      $('.second-panel div > img').css('opacity', 0);
      $('.second-panel div > img').waypoint(function() {
          $('.second-panel  div > img').addClass('animated fadeInRight');
      }, { offset: '70%' });

      $('.second-content').css('opacity', 0);
      $('.second-content').waypoint(function() {
          $('.second-content').addClass('animated fadeInLeft');
      }, { offset: '70%' });

    /* THIRD PANEL - ABOUT */
      $('.third-panel div > img').css('opacity', 0);
      $('.third-panel div > img').waypoint(function() {
          $('.third-panel  div > img').addClass('animated fadeInLeft');
      }, { offset: '70%' });

      $('.third-content').css('opacity', 0);
      $('.third-content').waypoint(function() {
          $('.third-content').addClass('animated fadeInRight');
      }, { offset: '70%' });





  /* SMOOTH SCROLL */
  

});
