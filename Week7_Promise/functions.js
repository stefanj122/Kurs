import axios from "axios";
import fs from "fs";

export function coldestAvgDay(arr, time) {
  const avgDays = [];
  arr.forEach((element) => {
    const avg = element.reduce((acc, element) => {
      return acc + Number(element);
    }, 0);
    avgDays.push(avg.toFixed(2));
  });
  let min = avgDays[0];
  avgDays.map((element) => {
    if (min > element) {
      min = element;
    }
  });
  const day = time[avgDays.indexOf(min) * 24];
  return `The coldest day by average temperature is ${day}.`;
}

export function coldestDay(arr, time) {
  const days = [];
  arr.forEach((element) => {
    let count = 0;
    element.map((element) => {
      if (element < 0) {
        count++;
      }
    });
    days.push(count);
  });
  let min = days[0];
  days.map((element) => {
    if (min < element) {
      min = element;
    }
  });
  const day = time[days.indexOf(min) * 24];
  return `The coldest day by total hours under zero is ${day}.`;
}

export function coldestDayByCount(arr, time) {
  const days = [];
  arr.map((element, index) => {
    days.push(0);
    let count = 0;
    let i = index;
    element.map((element, index, arr) => {
      if (element < 0) {
        count++;
      } else {
        if (count > days[i]) {
          days.pop();
          days.push(count);
          count = 0;
        }
      }
    });
    if (count > days[i]) {
      days.pop();
      days.push(count);
    }
  });
  let min = days[0];
  days.map((element) => {
    if (min < element) {
      min = element;
    }
  });
  const day = time[days.indexOf(min) * 24];
  return `The coldest day by continued hours under zero is ${day}.`;
}

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

export function readFromCsv() {
  const file = fs.readFileSync("Weather.csv");
  const arr = file.toString().split(/[;\n]/g);
  const time = [];
  const temperature = [];
  const snowfall = [];
  for (let i = 3; i < arr.length; i += 3) {
    time.push(arr[i].split("T")[0]);
    temperature.push(arr[i + 1]);
    snowfall.push(arr[i + 2]);
  }
  return { time, temperature, snowfall };
}

export function sortDaily(time, temperature) {
  const daily = [[]];
  for (let i = 0; i < temperature.length; i++) {
    if (time[i] === time[i - 1] || i === 0) {
      daily[daily.length - 1].push(temperature[i]);
    } else if (i !== temperature.length - 1) {
      daily.push([]);
    }
  }
  return daily;
}
