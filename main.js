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


const revealAnimation = () =>{
    document.querySelectorAll(".reveal").forEach(ele => {
        var spanParent = document.createElement("span");
        var spanChild = document.createElement("span");

        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        spanChild.innerHTML = ele.innerHTML;
        spanParent.appendChild(spanChild);
        ele.innerHTML = "";
        ele.appendChild(spanParent)
    });
}

revealAnimation()

// ---------------------------------- Reveal text animation 

const loaderAnimation = () => {

    var tl = gsap.timeline();
    tl
    .from(".child span",{
        x : 100,
        delay : .5,
        stagger : .2,
        duration : 1.5,
        ease: Power3.easeInOut,
    })
    .to(".parent .child", {
        y : "-100%",
        duration : 1,
        ease : Power3.easeInOut,
    })
    .to(".loaderOne", {
        height : 0,
        duration : .5,
        ease : Power3.easeInOut,
        display : "none",
    })
    
}
loaderAnimation();

// about page animation 

const aboutPage = () =>{

    let tl = gsap.timeline({
        
        scrollTrigger : {
            trigger : ".aboutContainer",
            scroller : "#main",
            start :"top 70%",
            end : "top 30%",
            scrub : 1,
        }
    });
    tl.from('.about .aboutLeft',{
        // delay : ,
        opacity : 0,
        y : -100,
        duration : 1
    })
    tl.from(".about #aboutHeading", {
        opacity : 0,
        x : 100,
        duration : 1,

    })
    tl.from(".about #leftCurly", {
        opacity : 0,
        x : -100,
        duration : 1,
        delay : 1

    })
    tl.from(".about #rightCurly", {
        opacity : 0,
        x : 100,
        duration : 1,
    })

    
}
aboutPage();



const contactHoverEffect = () =>{

    var contactVar = document.querySelectorAll('.contactbtn');
    // console.log(contactVar);
    contactVar.forEach(function(elem){
        elem.addEventListener('mouseenter', ()=>{
            var att = elem.getAttribute('data-image')
            crsr.style.transform = `translate(${0}%, ${0}%)`;
            crsr.style.width = "500px";
            crsr.style.height= "200px";
            crsr.style.borderRadius = "10px";
            crsr.style.backgroundImage = `url(${att})`;
        })
        elem.addEventListener('mouseleave', ()=>{
            crsr.style.width = "30px";
            crsr.style.height= "30px";
            crsr.style.borderRadius = "50%";
            crsr.style.transform = `translate(${50}%, ${50}%)`;
            crsr.style.backgroundImage = `none`;
        })
    })
}

contactHoverEffect();

// let mybutton = document.getElementById("footerTop").addEventListener('click', function topFunction() {
//     console.log("top");
//     document.body.scrollTop = 0; 
//     document.documentElement.scrollTop = 0;
// })

const topScroll = () =>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

}