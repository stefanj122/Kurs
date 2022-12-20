import axios from "axios";
import fs from "fs";
import { getWeather } from "./functions.js";

const file = await getWeather(
  "https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=2022-12-17&end_date=2022-12-21"
);
fs.writeFileSync("Weather.csv", file);