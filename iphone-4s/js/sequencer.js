/*
  This code is originally from Apple.
  For the purpose of keeping the demo simple, I've removed much
  of their code and have modified other parts of it.
*/

var Sequencer = function(b) {
  $.extend(this,
    {
      slideTime: 1100,
      transitionTime: 900,
      reset: true,
      sequence: b,
      current: -1,
      currentTimeout: undefined,
      autoPlaying: false,
      first: true
    }
  )
};

Sequencer.prototype = {
  
  next: function() {
    if(this.current < this.sequence.length-1) {
      this.current++
    } else {
      this.current=0
    }
    var a=[];
    if(this.reset && this.current === this.sequence.length-1) {
      a.push(function() {
        this.sequence[0].forward(0);
        this.current=0
      });
      this.sequence[this.current].forward(this.transitionTime, a, this)
    } else {
      this.sequence[this.current].forward(this.first ? 0 : this.transitionTime, a, this);
      this.first=false
    }
    if(this.autoPlaying) {
      var that = this;
      setTimeout(function() {
        that.next()
      },2500)
    }
  },
  
  play: function() {
    this.autoPlaying = true;
    this.next()
  }
  
};

function Slide(a) {
  this.seq=a;
}

Slide.prototype = {
  
  forward: function(transitionTime, additionalInstructions, sequencer) {
    if(additionalInstructions && additionalInstructions.length > 0 && sequencer && transitionTime > 0) {
      var e = this.seq[0].el;
      var a = function() {
        additionalInstructions[0].call(sequencer);
        e[0].removeEventListener("webkitTransitionEnd", a, false);
        e[0].removeEventListener("transitionend", a, false);
      };
      e[0].addEventListener("webkitTransitionEnd", a, false);
      e[0].addEventListener("transitionend", a, false);
    }
    var that = this
    $.each(this.seq, function(i, v) {
      that.transform(v, "forward", transitionTime);
    })
  },

  transform: function(b, delayType, transitionTime) {
    b.el.css("-webkit-transition", transitionTime + "ms cubic-bezier(.51, .01, .37, .98)");
    b.el.css("-moz-transition", transitionTime + "ms cubic-bezier(.51, .01, .37, .98)");
    b.el.css("-webkit-transform", this.transformString(b.x, b.y, b.r));
    b.el.css("-moz-transform", this.transformString(b.x, b.y, b.r));
  },
  
  transformString: function(x, y, r) {
    r = r ? r : 0;
    return "translate(" + x + "px, " + y + "px) rotate(" + r + "deg)"
  }
  
};
