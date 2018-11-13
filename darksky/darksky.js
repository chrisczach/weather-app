const request = require("request");
const fs = require("fs");
const keys = JSON.parse(fs.readFileSync("./keys.json"));

const weather = (error, coordinatesObject) => {
  if (error) {
    console.log(error);
  }
  request(
    `https://api.darksky.net/forecast/${keys.darksky}/${
      coordinatesObject.latitude
    },${coordinatesObject.longitude}`,
    (error, response, body) => {
      const currenlty = JSON.parse(body).currently;
      console.log(currenlty.temperature);
    }
  );
};

module.exports = { weather };
