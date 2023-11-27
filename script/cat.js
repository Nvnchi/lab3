let url = `https://api.thecatapi.com/v1/images/search?api_key=live_8E9CJmSFQFtQnol8NNb1d2doyGViH66bS3zTQOYIurXai87mR8Abn6EGTObRPsgi`;
fetch(url).then(response => {
    return response.json();
}).then(data => {
    document.querySelector('#ad').style.backgroundImage = `url(${data[0].url})`;
}).catch(err => {
    console.log(err);
});
