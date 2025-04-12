let tl=gsap.timeline();
function page1Animation(){
    tl.from("nav h1,nav a,nav button",{
        y:-20,
        opacity:0,
        delay:.1,
        duration:0.05,
        stagger:.1
    })
    tl.from(".center-part1 h1",{
        opacity:0,
        duration:.2,
        x:-100,
        delay:.08
    })
    tl.from(".center-part1 h4",{
        x:100,
        delay:.3,
        opacity:0,
        duration:.3
    })
    tl.from(".center-part1 button",{
        opacity:0,
        duration:1
        
    })
    // agar timeline mein delay dena hai to ham jo property ka object ya action ka object hai uske baad ek aur parameter add karskte hai ie"-=time""
    // iska matlab ye hai ki jo isse pehle animation hoga uske khatam hone k ek second pehle hi ye chalna shuru kar deg
    tl.from(".center-part2 img",{
        opacity:0,
        duration:.5,
    },"-=1")
    tl.from(".sectionbottom img",{
        duration:.15,
        opacity:0,
        y:20,
        stagger:.08,
        
    },"-=.5")

}
page1Animation();

// agar hame koi do cheez agar timeline mein hotehue bhi ek saath chalana hai to ham use same parameter add kar denge dono mein properties k baar 
// jaise yaha pe neeche services mein hamne :"hello "likha hai to isse ye pata chalta hai ki id dedi hai dono ko to saathc ahalenge 


// yaha pe har ek k liye scroll trigger likhne sahi methord nahi hai isse accha hai  ham timeliene mien hi likh de rhe hai 
// yaha pe jo scrollTrigger karna hai vo ham timeline mein hi kar denge 


function page2Animation(){
    let tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            // markers:true,
            scroller:"body",
            start:"top 90%",
            scrub:2,
            end:"top 70%"
        }
    })
    
    tl2.from(".services h1",{
        x:-30,
        duration:.5,
        
        opacity:0, 
    },"hello")
    tl2.from(".services p",{
        x:30,
        duration:.5,
        opacity:0,
    
    },"hello")
    
    let tl3=gsap.timeline({
        scrollTrigger:
        {
            trigger:".container",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 40%",
            scrub:2,
        }
    })
    tl3.from(".firstrow.a",{
        x:-100,
        opacity:0,
        duration:.5
    },"first")
    tl3.from(".firstrow.b",{
        x:100,
        opacity:0,
        duration:.9
    },"first")
    tl3.from(".secondrow.a",{
        opacity:0,
        x:-100,
        duration:1
    },"second")
    tl3.from(".secondrow.b",{
        x:100,
        opacity:0,
        duration:1
    },"second")
}
page2Animation();