
document.addEventListener("DOMContentLoaded",()=>{

    const tl=gsap.timeline();

 

        tl.from(".heading",{
            x:-400,
            opacity:0,
            duration:1,
            filter:"blur(3px)",
            ease:"power4.out"
        })


        tl.from(".primary-btn",{
            scale:0,
            duration:0.5,
            delay:0.2
        })
    
})