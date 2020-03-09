$(function () {
  $(window).on('scroll load', function () {
    let scrollTop = $(this).scrollTop();
    // viewportの下の高さを取得
    let scrollBtm = scrollTop + $(window).height();
    let changeHeight = function(n) {
      let ch = 5500 * n + ($(window).height()*2);
      return ch;
    }
    if (scrollTop <= $(window).height() / 2 && $(".topWrapper").css("opacity") == 0) {
      $(".topWrapper, .titleBottom").animate({
        opacity: 1
      }, 1500);
    }
    if (scrollTop >= $(window).height() / 2 && $(".topWrapper").css("opacity") == 1) {
      $(".topWrapper, .titleBottom").animate({
        opacity: 0
      }, 1500);
    }
    if (scrollBtm >= 0 && scrollBtm <= changeHeight(1)  && ($(".bg2").is(':visible') || $(".bg3").is(':visible') || $(".bg4").is(':visible') || $(".bg5").is(':visible'))) {
      $(".background:not(.bg1)").fadeOut(2000);
      $(".bg1").fadeIn(2000);
    }
    if (scrollBtm > changeHeight(1) && scrollBtm <= changeHeight(2) && ($(".bg1").is(':visible') || $(".bg3").is(':visible') || $(".bg4").is(':visible') || $(".bg5").is(':visible'))) {
      $(".background:not(.bg2)").fadeOut(2000);
      $(".bg2").fadeIn(2000);
    }
    if (scrollBtm > changeHeight(2) && scrollBtm <= changeHeight(3) && ($(".bg1").is(':visible') || $(".bg2").is(':visible') || $(".bg4").is(':visible') || $(".bg5").is(':visible'))) {
      $(".background:not(.bg3)").fadeOut(2000);
      $(".bg3").fadeIn(2000);
    }
    if (scrollBtm > changeHeight(3) && scrollBtm <= changeHeight(4) && ($(".bg1").is(':visible') || $(".bg2").is(':visible') || $(".bg3").is(':visible') || $(".bg5").is(':visible'))) {
      $(".background:not(.bg4)").fadeOut(2000);
      $(".bg4").fadeIn(2000);
    }
    if (scrollBtm > changeHeight(4) && scrollBtm <= changeHeight(5) && ($(".bg1").is(':visible') || $(".bg2").is(':visible') || $(".bg3").is(':visible') || $(".bg4").is(':visible'))) {
      $(".background:not(.bg5)").fadeOut(2000);
      $(".bg5").fadeIn(2000);
    }
  });
});