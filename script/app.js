class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this));
    }

    gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather() {
        // check if cached data exists and is less than one hour old
       let cachedData = localStorage.getItem('weatherData');
       //if (cachedData) {
       //     let { timestamp, data } = JSON.parse(cachedData);
       //     let currentTime = new Date().getTime();
       //     let oneHour = 60 * 60 * 1000; //one hour in milliseconds
//
       //     if (currentTime - timestamp < oneHour) {
       //         // use the cached data
       //         this.updateWeather(data);
       //         return;
       //     }
       // }

        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&APPID=033e06e2566388f7d4bf9d7c53a11e33&units=metric;`
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            //update the cache with new data and timestamp
            let currentTime = new Date().getTime();
            let newData = {
                timestamp: currentTime,
                data: data
            };
            localStorage.setItem('weatherData', JSON.stringify(newData));

            //update the UI with new data
            this.updateWeather(data);

            // display cat or dog image on weather
            this.displayCatImage(data.weather[0].main);

        }).catch(err => {
            console.log(err);
        });
    }

    updateWeather(data) {
        document.querySelector('#weather').innerHTML = data.weather[0].main;
    }

    async displayCatImage(weatherCondition) {
        let adElement = document.querySelector('#ad');
        let imageUrl;

        // Fetch random cat image
        const data = await getCatImage();
        imageUrl = data[0].url;

        adElement.style.backgroundImage = `url(${imageUrl})`;
        console.log(imageUrl);
    }

    errorLocation(err) {
        console.log(err);
    }
}


let app = new App();