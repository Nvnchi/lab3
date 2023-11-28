async function getCatImage() {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=live_8E9CJmSFQFtQnol8NNb1d2doyGViH66bS3zTQOYIurXai87mR8Abn6EGTObRPsgi`;
    try {
        const data = await fetch(url);
        return data.json()
    } catch (err) {
        console.log(err);
        return null;
    }
}

