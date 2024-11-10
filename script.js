var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    //markers:true,
}})

tl.to("#fanta",{
    top:"120%",
    left:"5%",
},"orange")
tl.to("#slice",{
    top:"160%",
    left:"25%"
},"orange")

tl.to("#piece",{
    top:"165%",
    right:"10%"
},"orange")

tl.to("#leaf",{    
        top:"110%",
        rotate:"130deg",
        left:"78%",
    
},"orange")

/* FOR PAGE THREE ANIMATION */
var t2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    //markers:true,
}})
t2.to("#fanta", {
    top: "270%",
    left: "17%",
}, "ca")

t2.to("#slice", {
    top: "260%",
    left: "34%",
    rotation: "360"
}, "ca")

// project complete
