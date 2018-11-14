const yargs = require("yargs");
const fs = require("fs");
const keys = JSON.parse(fs.readFileSync("./keys.json"));
const axios = require("axios");

const argv = yargs
  .options({
    a: {
      alias: "address",
      demand: true,
      describe: "Address for fetch weather",
      string: true
    }
  })
  .help().argv;

axios
  .get(
    `https://maps.googleapis.com/maps/api/geocode/json?key=${
      keys.gmaps
    }&address=${encodeURIComponent(argv.address)}`
  )
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("not a valid address");
    }
    const coordinates = response.data.results[0].geometry.location;
    return axios.get(
      `https://api.darksky.net/forecast/${keys.darksky}/${coordinates.lat},${
        coordinates.lng
      }`
    );
  })
  .then(response => console.log(response.data.currently))
  .catch(error => console.log(error));
