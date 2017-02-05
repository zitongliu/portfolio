$(document).ready(function(){
  $(function(){


    // ===========================================================================
    //   Start of intro typed.js
    // ===========================================================================
      $("#intro-text").typed(
        {
          strings: ["Hi there, my name is Steve.", "I am a full stack web developer with an aeronautical engineering degree.","I love new and innovative technologies.", "I enjoy building products that are creative... ", "... user friendly, and solve real world problems."],
          // typing speed
          typeSpeed: 20,
          // time before typing starts
          startDelay: 0,
          // backspacing speed
          backSpeed: 0,
          // time before backspacing
          backDelay: 800,
          // loop
          loop: true,
          // false = infinite
          loopCount: false,

      });

  });

  // ===========================================================================
  //   Start of about
  // ===========================================================================


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
.addTo(controller);

// .addIndicators({
//   name: 'About Transition',
//   colorTrigger: 'black',
//   colorStart: '#75C695',
//   colorEnd: 'pink'
// });
// ===========================================================================
//   Start of intro test
// ===========================================================================
  // // parallax scene
  // var slideParallaxScene = new ScrollMagic.Scene({
  //   triggerElement: '#ticTacThrones',
  //   triggerHook: 0.2,
  //   duration: '100%'
  // })
  // .setTween(TweenMax.from('.ticTacThrones-bcg',1, {y: '-40%', ease:Power0.easeNone}))
  // .addIndicators({
  //   name: 'TicTacThrones Transition',
  //   colorTrigger: 'black',
  //   colorStart: '#75C695',
  //   colorEnd: 'pink'
  // })
  // .addTo(controller);



  // ===========================================================================
  //   Start of Projects ScrollMagic
  // ===========================================================================



  // Init ScrollMagic
  // var controller = new ScrollMagic.Controller();
  var pinScene00 = new ScrollMagic.Scene({
    triggerElement: '#slide00',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide00 .pin-wrapper')
  .addTo(controller);

  // Scene 1 - pin the second section
  var pinScene01 = new ScrollMagic.Scene({
    triggerElement: '#slide00',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide01 .pin-wrapper')
  .addTo(controller);

  // Scene 2 - pin the third section
  var pinScene02 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide02 .pin-wrapper')
  .addTo(controller);

  // Scene 3 - pin the fourth section
  var pinScene03 = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide03 .pin-wrapper')
  .addTo(controller);

  // Scene 4 - pin the fifth section
  var pinScene04 = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('#slide04 .pin-wrapper')
  .setTween(
    // TweenMax.from('.prop1',1, {x: '4%', ease:Power0.easeNone})
    new TimelineMax().add([
    TweenMax.from('.prop1',1, {x: '4%', ease:Power0.easeNone}),
    TweenMax.to('.prop2',1, {x: '20%',y: '-90%', ease:Power0.easeNone})
  ])

  )
  .addTo(controller);

  // Scene 5 - pin the sixth section
  var pinScene05 = new ScrollMagic.Scene({
    triggerElement: '#slide04',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#slide05 .pin-wrapper')
  .addTo(controller);


});
