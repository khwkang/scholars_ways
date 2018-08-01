import {TweenMax, TimelineMax} from 'gsap'

export default {
  spinLogo() {
    const sw_logo = document.getElementById("sw_logo");
    const tl = new TimelineMax()
    tl.to('#sw_logo', 0.5, {rotation:"+=360"})
  }
}
