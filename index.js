console.log("running.......") 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
   sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}


let work8 = document.querySelector(".work8")
let work5 = document.querySelector(".work5")
let work6 = document.querySelector(".work6")

let work7 = document.querySelector(".work7")

let btn =  document.querySelector(".btn")

  function readme(){
    work5.style.display="block"
    work6.style.display="block"
    work7.style.display="block"
    work8.style.display="block"
     btn.style.display="none"
}

  

// btn.innerHTML ="See Less"
// work.style.display="block"
// 
// work2.style.display="block"
// work3.style.display="block"
// btn.style.display="none"



 
