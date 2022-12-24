import axios from "axios";
import fs from "fs";
import { getWeather } from "./zad4_weather.js";

const file = await getWeather(
  "https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=2022-12-17&end_date=2022-12-21"
);

fs.writeFileSync("Weather.csv", file);

async function compareWeather() {
  const date = new Date();
  let format1 =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let format2 =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    (date.getDate() + 4);
  const weather = fs.readFileSync("Weather.csv").toString();
  const current = await getWeather(
    `https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=${format1}&end_date=${format2}`
  );
  if (weather !== current) {
    fs.writeFileSync("Weather.csv", current);
    console.log("Weather.csv are changed.");
  } else {
    console.log("Nothing changes.");
  }
}
setInterval(() => compareWeather(), 3_600);
