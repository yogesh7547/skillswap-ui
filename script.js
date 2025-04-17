

//nav bar 

// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });




















var tl = gsap.timeline()

/* || HEADER */

tl.from(".logo h1", {
    x: -20,
    opacity: 0,
    delay: 0.5,
    duration: 1
})

tl.from(".nav", {
    y: -30,
    opacity: 0,
    duration: 0.5,

})

tl.from(".nav a", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1

})

tl.from(".signup button", {
    x: 20,
    opacity: 0,

    duration: 0.5
})




/* || MAIN */

/* || HERO SECTION */

gsap.from(".hero h1", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 1
})

gsap.from(".hero h2", {
    opacity: 0,
    delay: 0.5,
    duration: 1
})

gsap.from(".hero button", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 1
})



/* || HOW IT WORKS SECTION */

gsap.from("#how-it-works-h1", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".how-it-works",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end:"top 40%",
        scrub:2
    }
})

gsap.from(".how-it-works .elem #img1", {
    opacity: 0,
    duration: 1,
    x: -80, y: 80, scale: 0.5,
    scrollTrigger: {
        trigger: ".how-it-works",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end:"top 10%",
        scrub:2
    }
})


gsap.from(".how-it-works .elem #img2", {
    opacity: 0,
    duration: 1,
    y: 80,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".how-it-works",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end:"top 20%",
        scrub:2
    }
})

gsap.from(".how-it-works .elem #img3", {
    opacity: 0,
    duration: 1,
    x: 80, y: 80, scale: 0.5,
    scrollTrigger: {
        trigger: ".how-it-works",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end:"top 20%",
        scrub:2
    }
})

gsap.from(".how-it-works .elem h1", {
    opacity: 2,
    duration: 1,
    y: 50,
    delay: 1,
    scrollTrigger: {
        trigger: ".how-it-works",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end:"top 20%",
        scrub:2
    }
})

gsap.from(".how-it-works .elem p", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 1,
    scrollTrigger: {
        trigger: ".how-it-works",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end:"top 20%",
        scrub:2
    }
})


/* || WHY SKILLSWAP SECTION */


gsap.from(".why-skill-swap-h1", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".why-skill-swap",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end:"top 40%",
        scrub:2
    }
})


gsap.from(".green",{
    opacity:0,
    x:-100,
    scrollTrigger:{
        trigger:".why-skill-swap",
        scoller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from(".blue",{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:".why-skill-swap",
        scoller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from(".yellow",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".why-skill-swap",
        scoller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from(".purple",{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:".why-skill-swap",
        scoller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 70%",
        scrub:2
    }
})



/* || DESCRIPTION */

gsap.from("#get-ready",{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:"#get-ready",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        // markers:true
    }
})



gsap.from("#common",{
    opacity:0,
    y:30,
    scrollTrigger:{
        trigger:".form",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:2,
        // markers:true
    }
})
