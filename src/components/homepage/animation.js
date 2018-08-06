export default {
  jumpTo(target) {
    TweenLite.to(window, 1, 
      { 
        scrollTo: target, 
        autoKill:false, 
        ease:Power4.easeInOut
      }
    )
  }
}