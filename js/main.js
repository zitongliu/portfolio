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

  // // Intro
  // var pinIntroScene = new ScrollMagic.Scene({
  //   triggerElement: '.fullwidth-intro',
  //   triggerHook: 0,
  //   duration: '10%'
  // })
  // .setPin('.fullwidth-intro', {pushFollowers: false})
  // .addIndicators({
  //
  // })
  // .addTo(controller);

  // About card
  // build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '#about',
  // duration: '90%',
  triggerHook: 0.3
})
.setClassToggle('.about-card', 'transition-about-card') // add class to project01
.addIndicators({
  name: 'About Transition',
  colorTrigger: 'black',
  colorStart: '#75C695',
  colorEnd: 'pink'
}) // this requires a plugin
.addTo(controller);


  // parallax scene
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '#ticTacThrones',
    triggerHook: 0.2,
    duration: '100%'
  })
  .setTween(TweenMax.from('.ticTacThrones-bcg',1, {y: '-40%', ease:Power0.easeNone}))
  .addIndicators({
    name: 'TicTacThrones Transition',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);

});
