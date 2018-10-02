let clickCount = 0;

export default {
  spinLogo(e) {
    clickCount += 1;
    const sw_logo = document.getElementById("sw_logo");
    const tl = new TimelineMax();
    tl.to("#sw_logo", 1, { rotation: "+=360" });

    if (clickCount == 10) {
      window.alert("feeling dizzy yet?");
      return false;
    } else if (clickCount == 20) {
      window.alert("is that all you got!?");
      return false;
    } else if (clickCount == 40) {
      window.alert("OM MA NI BAM ME HOOM!");
      clickCount = 0;
    } else {
      console.log("keep on clicking!");
    }
  }
};
