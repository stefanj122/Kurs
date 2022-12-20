import axios from "axios";
import fs from "fs";
import {
  coldestAvgDay,
  coldestDay,
  coldestDayByCount,
  getWeather,
  readFromCsv,
  sortDaily,
} from "./functions.js";

getWeather(
  "https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=2022-12-18&end_date=2022-12-22"
);

const { time, temperature, snowfall } = readFromCsv();
const daily = sortDaily(time, temperature);
try {
  fs.rmSync("zadatak5.txt");
} catch (e) {
  console.log("zadatak5.txt not found!");
}

fs.appendFileSync("zadatak5.txt", coldestAvgDay(daily, time) + "\n");
fs.appendFileSync("zadatak5.txt", coldestDay(daily, time) + "\n");
fs.appendFileSync("zadatak5.txt", coldestDayByCount(daily, time) + "\n");
console.log(fs.readFileSync("zadatak5.txt").toString());
