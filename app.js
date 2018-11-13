const request = require("request");
const fs = require("fs");
const keys = JSON.parse(fs.readFileSync("./keys.json"));

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${
      keys.gmaps
    }&address=1301%20lombard%20street%20philadelphia`,
    json: true
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
);
