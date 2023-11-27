let url = `https://api.thecatapi.com/v1/images/search?api_key=live_6uQSG6RCieQkgliDorKjzm2P9d3tEyzIjJkcA82EEVwj3NcmySKE8xN9LEWlVK78`;
fetch(url).then(response => {
    return response.json();
}).then(data => {
    document.querySelector('#ad').style.backgroundImage = `url(${data[0].url})`;
}).catch(err => {
    console.log(err);
});