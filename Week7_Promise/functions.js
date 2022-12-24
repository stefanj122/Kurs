import axios from "axios";
import fs from "fs";

export function coldestAvgDay(arr, time) {
  const avgDays = [];
  arr.map((element) => {
    const avg = element.reduce((acc, element, index, arr) => {
      return acc + Number(element) / arr.length;
    }, 0);
    avgDays.push(avg.toFixed(2));
  });
  let min = avgDays[0];
  avgDays.map((element) => {
    if (Number(min) > element) {
      min = element;
    }
  });

  const day = time.filter((el, i) => time.indexOf(el) === i)[
    avgDays.indexOf(min)
  ];
  return `The coldest day by average temperature is ${day}, with ${min} temperature.`;
}

export function coldestDay(arr, time) {
  const days = [];
  let count = 0;
  arr.map((element) => {
    count = 0;
    element.map((element) => {
      if (element < 0) {
        count++;
      }
    });
    days.push(count);
  });
  let hours = days[0];
  days.map((element) => {
    if (hours < element) {
      hours = element;
    }
  });
  const day = time.filter((element, i) => time.indexOf(element) === i)[
    days.indexOf(hours)
  ];
  if (hours != 0) {
    return `The coldest day by total hours under zero is ${day}, with ${hours} hours.`;
  } else {
    return "In the next five days there is not temperature below zero.";
  }
}

export function coldestDayByCount(arr, time) {
  const days = [];
  let i = 0;
  let count = 0;

  arr.map((element, index) => {
    days.push(0);
    count = 0;
    i = index;
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
  let hours = days[0];
  days.map((element) => {
    if (hours < element) {
      hours = element;
    }
  });
  const day = time.filter((element, i) => time.indexOf(element) === i)[
    days.indexOf(hours)
  ];
  if (hours != 0) {
    return `The coldest day by continued hours under zero is ${day}, with ${hours} countinued hours.`;
  } else {
    return "In the next five days there is not temperature below zero.";
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
      daily[daily.length - 1].push(temperature[i]);
    }
  }
  return daily;
}
