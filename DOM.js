                                     // DOM Document Object 
                                    //  they are 4 types of pillars of DOM
                                    // 1--- selector of an element

// document.querySelector("h1") // ye h1 ko select krta hai 
var a = document.querySelector("h1") // ye h1 ko select krke  a me store krta hai
var a = document.querySelector("h1") //--- selector se hum kisi bhi element ko select kr skte hai
// agr hume class ya id se select krna hai to hum ("h1") ki jagah (".class name") ya ("#id name") kr skte hai

                                    //  2--- changing html   

// var a= document.quarySelector("h1")
a.innerHTML =" mene html ka code change kr diya haii" // ye humare html ka code change kr dega
 
                                    //  3--- changing css

// var a =document.quarySelector("h1")   
a.style.color="yellow" // ye humare h1 ka color change kr dega  css ki koi bhi property use kr skte hai 
a.style.backgroundColor="black"  // yaha hum camel case use krege ex- 'background-color' = backgroundColor 

                                    //  4--- adding Event listener
a.addEventListener("click",function(){
    a.innerHTML="mene text ko change kr diyaa yee"
    a.style.color="white"
    a.style backgroundColor="black"// ye humare h1 pe click krne pe console me heyy print kr dega
}  )                                 
 