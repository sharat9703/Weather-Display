const toggleMoon = document.getElementById("darkmode");
const toggleSun = document.getElementById("lightmode");
const nav = document.getElementById("top");
const toBgDark = document.querySelector("bg-white");
const toTextLight = document.querySelector("text-dark");
let x = document.getElementsByTagName("div");
let divBgLight = [];

for(let i=0;i<x.length;i++){
    if(x[i].classList.contains('bg-white')){
        divBgLight.push(x[i]);
    }
}

let divOffCanvas = document.getElementsByClassName("offcanvas-body");



let elementToDarkMode=[];

let z=document.querySelectorAll('.darkmode');

////////////////////////


toggleMoon.onclick=()=>{
    toggleMoon.style.display = "none";
    toggleSun.classList.remove("d-none");
//span,a,button,
document.body.style.backgroundColor="#201";

///
divBgLight.forEach(item => {
item.classList.remove('bg-white');
item.classList.add("bg-dark");
item.classList.remove("text-dark");
item.classList.add("text-light");
});
//  
divOffCanvas[0].style.backgroundColor="#201";
divOffCanvas[0].style.color = "whitesmoke"; 

//
z.forEach(item =>{
    item.classList.add('dark');
    item.classList.add('text-white');
        });
        //
}


///////////////////////////

toggleSun.onclick=()=>{
    toggleSun.classList.add("d-none");
    toggleMoon.style.display = "inline-block";
    document.body.style.backgroundColor="#eee";
       
    let y = document.getElementsByTagName("div");
    let divBgDark=[];   
    for(let j=0;j<y.length;j++){
        if(y[j].classList.contains('bg-dark')){
        divBgDark.push(y[j]);
       }
    }
  
divBgDark.forEach(item => {
    item.classList.remove("bg-dark");
    item.classList.add("bg-white");
    item.classList.remove("text-light");
    item.classList.add("text-dark");
    });
 
let divOffCanvasNew = document.getElementsByClassName("offcanvas-body");

    divOffCanvasNew[0].style.backgroundColor="#fff";
    divOffCanvasNew[0].style.color = "#201";
    document.getElementById('offcanvas-header').classList.remove('bg-white');   
    document.getElementById('offcanvas-header').classList.add('bg-dark');
    document.getElementById('offcanvas-header').classList.add('text-white');

    z.forEach(item =>{
item.classList.remove('dark');
item.classList.remove('text-white');
    });
}
//////////