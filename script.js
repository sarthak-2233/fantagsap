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
t2.to("#slice",{
    top:"205%",
    left:"41%",
    width: "20vw",
},"fan")

t2.to("#fanta",{
    top:"218%",
    left:"35%",
    width:"32%",
},"fan")

// project complete