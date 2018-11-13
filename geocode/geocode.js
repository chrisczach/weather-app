const request = require("request");
const fs = require("fs");
const keys = JSON.parse(fs.readFileSync("./keys.json"));

const geocodeAddress = (address, callback) =>
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=${
        keys.gmaps
      }&address=${encodeURIComponent(address)}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("unable to connect");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find that address");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      } else {
        callback("uncaught error", body.status);
      }
    }
  );

module.exports = {
  geocodeAddress
};
