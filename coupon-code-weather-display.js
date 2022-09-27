// Initialize tooltips
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const couponCode = document.getElementById("coupon-code-div");

const couponbtn = document.getElementById("btn-coupon");
couponbtn.onclick = () => {
  couponCode.classList.toggle("d-none");
};
const coupon = document.getElementById("coupon-code-span");
const couponText = document.getElementById("couponText");

coupon.onclick = () => {
  navigator.clipboard.writeText(couponText.value).then(() => {
    alert("copied to clipboard");
  });
};
let geoLocation=()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(show);
  }
}
let show=(data)=>{
  console.log(data);
  let latitude = data.coords.latitude;
  let longitude= data.coords.longitude; 
  console.log(`latitude is ${latitude} longitude is ${longitude}`);
  getWeather(latitude,longitude);
}
const key ="fbf712a5a83d7305c3cda4ca8fe7ef29";
let getWeather=(latitude,longitude)=>{
  let api =`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=${key}`;
console.log(api);
  fetch(api)
  .then((response)=>{
let data= response.json();
return data;
  })
  .then((data)=>{
    let today =new Date();
    if(today.getHours()>6 && today.getHours()<18){
      weather.temperature =  Math.round(data.list[0].temp.night);
    }
    else{
      weather.temperature =  Math.round(data.list[0].temp.night);
    }
    
    weather.city = data.city.name;
    weather.description = data.list[0].weather[0].description;
    weather.iconId = data.list[0].weather[0].icon;
  }).then(()=>{
    displayWeather();
  });
  
}
let weatherIcon=document.getElementById("w-icon");
let place = document.getElementById("place");
let temperature = document.getElementById("temperature");
let weatherType= document.getElementById("type");
let notification = document.getElementById("notification");
function displayWeather(){
weatherIcon.innerHTML =`<img src="./icons/${weather.iconId}.png"
 style="height:34px;"/>`;
temperature.innerHTML = `${weather.temperature}°<span> C,</span>`;
place.innerHTML=`${weather.city},`;
weatherType.innerHTML=`${weather.description}`; 
}


window.onload = () => {
  geoLocation();
  let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
  myModal.show();
};

let close_button = document.querySelector(".close");


//////////////////////////////weather-API part////////////////////////////
let weather ={};

close_button.onclick = () => {
  coupon.classList.toggle("d-none");
  
  
};
