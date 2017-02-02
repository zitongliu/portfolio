$(function(){
    $("#intro-text").typed({
        strings: ["Hello, my name is Steve...", "I am a full stack web developer...","I want to build "],
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 10,
        // time before backspacing
        backDelay: 800,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,

    });
});

$(document).ready(function(){
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Intr
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '.fullwidth-intro',
    triggerHook: 0,
    duration: '10%'
  })
  .setPin('.fullwidth-intro', {pushFollowers: false})
  .addTo(controller);

  // parallax scene
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.bcg',1, {y: '-30%', ease:Power0.easeNone}))
  .addTo(controller);

});
