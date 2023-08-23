var crsr = document.getElementById('cursor');
var main = document.getElementById('main');
main.addEventListener('mousemove', (dets)=>{
    crsr.style.left = `${dets.clientX}px`;
    crsr.style.top = `${dets.clientY}px`;

})
const init  = () =>{
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

init();
const navBar = () =>{
    let navbarTimeLine = gsap.timeline();
    navbarTimeLine
        .from("#nav" ,{
            y: 100,
            duration:1,
            delay: 4,
            opacity:0,
            
        })
        .from("#tagline h1", {
            y : 100,
            duration : 1,
            opacity : 0,
            ease: Expo.easeInOut, 
    
        })
        .from("#tagline h4", {
            y : 100,
            duration : 1,
            delay : -.5,
            opacity : 0,
            ease: Expo.easeInOut, 
    
        })
        .from("#scroll",{
            y : -25,
            duration : .5,
            repeat : -1,
            // delay : 1,
            opacity : 0,
            ease : Expo.easeInOut,
            yoyo : true
        })
        .to("#nav #hash", {
            rotation : 360,
            duration : 2,
            ease: Expo.easeInOut, 
            display : "none"
            
        })
        .to("#nav #lastName", {
            x : 48,
            duration : 1,
            ease: Expo.easeOut, 
        })
        .to("#nav #name", {   
            y : 0,
            duration : 1,
            opacity:1,
            display : "block",
            ease: Power1.easeInOut, 
        })
        .to("#nav #name", {  
            delay:2, 
            y : 30,
            duration : 1,
            opacity:0,
            display : "none",
            ease: Power1.easeInOut, 
        })
        .to("#nav #lastName", {
            x : -10,
            duration : 1,
            ease: Expo.easeOut, 
        })
        .to("#nav #hash", {
            display:"block",
            rotation : 360,
            duration : 2,
            ease: Expo.easeInOut, 
        })
        

}
navBar()
// ---------------------------------- Navbar code  



let mybutton = document.getElementById("footerTop").addEventListener('click', function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})