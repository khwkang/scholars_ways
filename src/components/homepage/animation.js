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
    var controller = new ScrollMagic.Controller() 
    var scene = new ScrollMagic.Scene({
      triggerElement: "#clinic_highlight"
    })
    .setTween("#back_to_top", 0.5, {display: "block", opacity: 1})
    // uncomment it for scroll indicator debug tool  
    // .addIndicators({name: "1 (duration: 0)"})
    .addTo(controller);
  },
  
  heroPulseEffect() {
    TweenMax.to("#home_hero", 3, {scaleX:1.1, scaleY:1.1, repeat:-1, yoyo:true});
    // TweenMax.to("#home_hero_title_animate", 3, {scaleX:1.1, scaleY:1.1, repeat:-1, yoyo:true});
  }
}
