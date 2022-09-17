let geoLocation=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show);
    }
    else{
        document.getElementById('temperature')="There is no geolocation support for your browser";
        document.getElementById('weather-type')="";
    }
}

let show=(data)=>{
console.log(data);
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
