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
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&APPID=033e06e2566388f7d4bf9d7c53a11e33&units=metric`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        }).catch(err => {
            console.log(err);
        });
    }

    errorLocation(err) {
        console.log(err);
    }
}