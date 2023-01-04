import axios from "axios";
import fs from "fs";

export async function getWeather(url) {
  try {
    const response = await axios.get(url, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    let str = "";
    const time = response.data.hourly.time;
    const temperature = response.data.hourly.temperature_2m;
    const snowfall = response.data.hourly.snowfall;
    str += "TIME;APPARENT TEMPERATURE;SNOWFALL\n";
    time.forEach((element, index) => {
      str += `${element};${temperature[index]};${
        snowfall[index] === 0 ? false : snowfall[index]
      }\n`;
    });
    return str;
  } catch (e) {
    console.log(e);
  }
}
// const file = await getWeather(
//   "https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=2022-12-27&end_date=2023-01-02"
// );
// fs.writeFileSync("Weather.csv", file);
// console.log("Weather writen in Weather.csv");
