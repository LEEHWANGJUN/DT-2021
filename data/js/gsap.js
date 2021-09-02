


gsap.registerPlugin(ScrollTrigger);
gsap.to(".individual_img", {
  scrollTrigger: {
    horizontal: true,
    trigger: ".individual_img",
    start:"0px 80%",
    end:"bottom 40%",
	scrub: 1,
  },
    opacity : 1, x:-30 ,
});



gsap.to(".inter_img", {
  scrollTrigger: {
    horizontal: true,
    trigger: ".inter_img",
    start:"0px 80%",
    end:"bottom 40%",
	scrub: 1,
  },
    opacity : 1, x:-30 ,
});


gsap.to(".dd", {
  scrollTrigger: {
    horizontal: true,
    trigger: ".dd",
    start:"0px 80%",
    end:"bottom 40%",
	scrub: 1,
  },
    opacity : 1, y:-30,
});

gsap.to(".ddd", {
  scrollTrigger: {
    horizontal: true,
    trigger: ".ddd",
    start:"0px 80%",
    end:"bottom 40%",
	scrub: 1,
  },
    opacity : 1, y:-30,
});



