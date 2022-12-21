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

const { time, temperature, snowfall } = readFromCsv();
const daily = sortDaily(time, temperature);
try {
  fs.rmSync("zadatak5.txt");
} catch (e) {

}

fs.appendFileSync("zadatak5.txt", coldestAvgDay(daily, time) + "\n");
fs.appendFileSync("zadatak5.txt", coldestDay(daily, time) + "\n");
fs.appendFileSync("zadatak5.txt", coldestDayByCount(daily, time) + "\n");
console.log(fs.readFileSync("zadatak5.txt").toString());
