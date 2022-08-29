var tl = gsap.timeline();

tl.from("#page", {
    opacity: 0,
    scale: 0,
    duration: 2,
    border: "5px double gray",
    ease: Expo.ease
})
.from("#spn1", {
    opacity: 0,
    scale: 2.5,
    ease: Expo.easeIn
})
.from("#spn1>h1", {
    opacity: 0,
    y: -100,
    stagger: 1,
    duration: 1,
    ease: Expo.ease
})
.from(".product_list", {
    opacity: 0,
    scale: 2.5,
    x: -10,
    ease: Expo.easeIn

})
.from(".store_list", {
    opacity: 0,
    scale: 2.5,
    x: -10,
    ease: Expo.easeIn

})
.from(".con_list", {
    opacity: 0,
    scale: 2.5,
    x: -10,
    ease: Expo.easeIn
})
.from("#pics", {
    opacity: 0,
    scale: 2.5,
    duration: 2
})
.from("#display>h1", {
    opacity: 0,
    x: -60,
    scale: 2.5,
    rotate: 360,
    duration: 2,
    color: "yellow"
})
.from("#spn", {
    opacity: 0,
    rotate: 360,
    duration: 1.5,
    ease: Expo.ease
})
.from("#para", {
    opacity: 0,
    x: 100
})
.from("#display>h6, #display>h5, #circle", {
    opacity: 0,
    stagger: 1,
    ease: Expo.ease,
    duration: 1
})


gsap.to("#page", {
    scrollTrigger: {
        trigger: "#page",
        // markers: true,
    }
})