let geoLocation=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(setPosition,showError);
    }
    else{
        document.getElementById('temperature')="";
        document.getElementById('type')="";
        document.getElementById('notification').style.display="block";
        document.getElementById('notification').innerHTML="There is no geolocation support for your browser";
    }
}

let setPosition=(data)=>{
let latitude = data.coords.latitude;
let longitude= data.coords.longitude; 
getWeather(latitude,longitude);
}
let showError=(err)=>{
    document.getElementById('notification').innerHTML=`<span>${err.message}</span>`;
}
let data=navigator.geolocation.getCurrentPosition(show).coords;
let lat = data.coords.latitude;

let longi = data.coords.longitude;

let place= document.getElementById("place");

window.onload=()=>{
    geoLocation();
    show();
    place.innerHTML= `${lat} and ${longi}`;
}
