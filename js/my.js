$(document).ready(function () {
  /* SIDEBAR NAVIGATION */
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
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
