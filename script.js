gsap.to("#page1 h1",{
    delay:1,
    transform:"translateX(-100%)",
    fontWeight:"100",
    duration:1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
         

    }
})