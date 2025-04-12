// ye sab bina buttond abye hi chal rha hai 

// tl.to("#full",{
    //     right:"0",
    //     duration:0.8
    // })
    // tl.from("#full h4",{
        //     x:150,
        //     opacity:0,
        //     duration:.5,   
        //     stagger:.2
        // })
        // tl.from("#full i",
        //     {
            //         opacity:0
            //     }
            // )
            
// ham chahate hai ki button dabane pe hi chale to uske liye event listener ka use karna padega 
            
// tl.to("#full",{
    //     right:"0",
    //     duration:0.3
    // })
    // tl.from("#full h4",{
        //     opacity:0,
        //     x:100,
        //     duration:.3,
        //     stagger:.2
        // })
        // tl.pause();
        //    tl.play();

// })



let menuopenbtn=document.querySelector("#nav i")
let menuclosebtn=document.querySelector("#full i")
let tl=gsap.timeline()

tl.to("#full",{
    right:"0",
    duration:0.5
})
tl.from("#full h4",{
    opacity:0,
    x:100,
    duration:.3,
    stagger:.2
})  
menuopenbtn.addEventListener("click",function(){
    tl.restart();
    
})
tl.pause()

menuclosebtn.addEventListener("click",function(){
    
    // tl.to("#full",{
    //     right:"-40%",
    //     opacity:0,duration:.5
    // })
    tl.reverse();
})
