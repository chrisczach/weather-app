const geocode = require("./geocode/geocode");
const darksky = require("./darksky/darksky");
const yargs = require("yargs");

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

geocode.geocodeAddress(argv.address, darksky.weather);
