fetch('https://api.imdbapi.dev/titles/tt4574334')
    .then(response => response.json())
    .then(json => {
        console.log(json.plot);
        console.log(json.rating.aggregateRating);
        console.log(json.genres[3]);
        console.log(json);
    });
