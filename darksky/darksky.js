const request = require("request");
const fs = require("fs");
const keys = JSON.parse(fs.readFileSync("./keys.json"));

const weather = (error, coordinatesObject) => {
  if (error) {
    return console.log(error);
  }
  request(
    {
      url: `https://api.darksky.net/forecast/${keys.darksky}/${
        coordinatesObject.latitude
      },${coordinatesObject.longitude}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const current = body.currently;
        console.log(current.temperature);
      } else {
        console.log("unable to connect to darksky");
      }
    }
  );
};

module.exports = { weather };
