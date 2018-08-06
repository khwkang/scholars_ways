export default {
  jumpTo(target) {
    TweenLite.to(window, 1, 
      { 
        scrollTo: target, 
        autoKill:false, 
        ease:Power4.easeInOut
      }
    )
  },
  activateBackToTop() {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
      triggerElement: "#qigong_hero"
    })
    .setTween("#back_to_top", 1, {display: "block"})
    .setTween("#back_to_top", 0.5, {display: "block", opacity: 1})
    .addIndicators({name: "1 (duration: 0)"})
    .addTo(controller);
  }
}
