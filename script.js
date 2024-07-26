const apiKey = "1cc30c183700f3e93634821368c8e8e4";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".error").style.display = "none";
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity-text").innerText = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind-text").innerText = Math.round(data.wind.speed) + "km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds_image.png";
        } else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear_image.png";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain_image.png";
        }else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow_image.png";
        }else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle_image.png";
        }else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist_image.png";
        }

        document.querySelector(".weather").style.display = "block";
    }

}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});