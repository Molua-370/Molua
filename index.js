function refreshWeather(currentweather){
    let currenteTemperaturevalue=document.querySelector("#currenttemperaturevalue");
    currenteTemperaturevalue.innerHTML=Math.round(currentweather.data.temperature.current);
    let weatherDescription=document.querySelector("#weatherdescription");
    weatherDescription.innerHTML=currentweather.data.condition.description;
    let currentWeathericon=document.querySelector("#weather-app-icon");
    currentWeathericon.innerHTML=
           <img
           src="${currentweather.data.condition.icon_url}"
           alt="not loading"
           class="weather-app-icon"
           />;
           console.log(currentweather.data);
           let humidity=document.querySelector("#Humidity");
           humidity.innerHTML='${currentweather.data.temperature.humidity}%';
           let windSpeed=document.querySelector("#windSpeed");
           windSpeed.innerHTML='${currentweather.data.wind.speed}knots';
           let currentTime=document.querySelector("#currenttime");
           let date=new Date(currentweather.data.time*1000);
           currentTime.innerHTML=formatDate(date);
}
function formatDate(date){
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days=["Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"]
    let day=days[date.getDay()];
    if(minutes<10){
        minutes='0${day}${hours}:${minutes}';
    }
    function searchCity(currentcityName){
        let apikey="73dof19a030ad06t05b21e8521b4860f";
        let upiurl='https://api.shecodes.io/weather/v1/current?query=$(currentcityName}&key=$key=${apiKey}';
        axion.get(apiurl).then(refreshWeather);
    }
    function displayCity(event){
        event.preventDefault();
        let cityName=document.querySelector("#city-name");
        let cityNamedisplayed=document.querySelector("h3");
        cityNamedisplayed.innerHTML=cityName.Value;
        currentcityname=cityName.value
        searchCity(currentcityname);
    }
    let searchForm=document.querySelector("#search-form");
    searchForm.addEventListener("submit","displayCity");
}