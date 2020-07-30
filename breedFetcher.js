const request = require('request');
const breedName = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search/?q=' + breedName, (error, response, body) => {
  if (error) {
    console.log("Request failed: " + error);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Breed cannot be found");
    } else {
      console.log(data[0]["description"]);
    }
  }
});

