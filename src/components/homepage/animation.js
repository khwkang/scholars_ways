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
      triggerElement: "#clinic_hero"
    })
    .setTween("#back_to_top", 0.5, {display: "block", opacity: 1})
    // uncomment it for scroll indicator debug tool  
    // .addIndicators({name: "1 (duration: 0)"})
    .addTo(controller);
  },
  
  sampleTween() {
    TweenMax.to("#home_hero_logo_animate", 3, {scaleX:1.1, scaleY:1.1, repeat:-1, yoyo:true});
    TweenMax.to("#home_hero_title_animate", 3, {scaleX:1.1, scaleY:1.1, repeat:-1, yoyo:true});
    //tint
    // TweenMax.to("#home_hero_logo", 1, {scaleX:1.4, scaleY:1.4, tint:0x91e600, repeat:-1, yoyo:true});
    //glowFilter
    // TweenMax.to("#home_hero_logo", 1, {scaleX:1.4, scaleY:1.4, glowFilter:{color:0x91e600, alpha:1, blurX:50, blurY:50}, repeat:-1, yoyo:true});
  }
}
