/*
  This code is originally from Apple.
  For the purpose of keeping the demo simple, I've removed much
  of their code and have modified other parts of it.
*/

$(function() {
  
  var phoneStage = $(".phone-stage"),
      bphone = $(".bphone");
  
  var q = new Slide([{
      el: phoneStage,
      x: -325,
      y: -234,
      r: -30,
    }, {
      el: bphone,
      x: 0,
      y: 0,
      r: -30
    }]),
  
  t = new Slide([{
      el: phoneStage,
      x: -264,
      y: -316,
      r: -0
    }, {
      el: bphone,
      x: -300,
      y: -300,
      r: -30
    }]),
  
  z = new Slide([{
      el: phoneStage,
      x: -403,
      y: -186,
      r: -90
  }]),
  
  u = new Slide([{
      el: phoneStage,
      x: -16,
      y: -374,
      r: 0
  }]),
  
  j = new Slide([{
      el: phoneStage,
      x: -67,
      y: -398,
      r: -90
  }]),
  
  f = new Slide([{
      el: phoneStage,
      x: -115,
      y: -326,
      r: -180
    }, {
      el: bphone,
      x: -300,
      y: -300,
      r: -30
  }]),
  
  v = new Slide([{
      el: phoneStage,
      x: -323,
      y: -428,
      r: -210
    }, {
      el: bphone,
      x: 0,
      y: 0,
      r: -30
  }]);
  
  b = new Sequencer([q, t, z, u, j, f, v]);
        
  window.addEventListener("load",
    function() {
      b.play();
    },
    false);

});