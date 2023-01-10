import * as mysql from "mysql2";
import http from "http";
import axios from "axios";
import {
  sortDaily,
  coldestAvgDay,
  coldestDay,
  coldestDayByCount,
} from "./../Week7_Promise/functions.js";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "zadaci",
  port: 3306,
});
// let { time, temperature, snowfall } = await apiWeather();
const createdb =
  "CREATE TABLE weather (id int(11) not null auto_increment primary key,time datetime unique default null,temperature float(15) null,snowfall varchar(20) null);";
const dropdb = "DROP TABLE IF EXISTS weather;";

async function apiWeather() {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall`
  );
  const time = response.data.hourly.time;
  const temperature = response.data.hourly.temperature_2m;
  const snowfall = response.data.hourly.snowfall.map((el) => {
    return el !== 0;
  });
  return { time, temperature, snowfall };
}

async function insertIntoTable(time, temperature, snowfall) {
  const timeSql = time.map((time) => {
    return time.replace("T", " ") + ":00";
  });
  try {
    for (let i = 0; i < time.length; i++) {
      conn.query(
        "INSERT INTO weather VALUE(NULL,'" +
          timeSql[i] +
          "'," +
          temperature[i] +
          ",'" +
          snowfall[i] +
          "');",
        (err) => {}
      );
    }
  } catch (e) {
    console.log(e);
  }
}

http
  .createServer((req, res) => {
    if (req.url === "/weather") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query("SELECT * FROM weather;", (err, result, fields) => {
        let str = `<title>Weather for next 7 days</title><style>td,th{text-align: center;}</style><table border=1px border-collapse= collapse
           width=50%><tr><td width=60%>TIME</td><td width=20%>TEMPERATURE</td><td width=20%>SNOWFALL</td></tr>`;

        if (result) {
          result.forEach((row) => {
            str += `<tr><td>${row.time}</td><td>${row.temperature}</td><td>${row.snowfall}</td></tr>`;
          });
          str += "</table>";
          res.write(str);
        } else {
          res.write(
            `<html><head><title>Weather for next 7 days</title><h1>Weather db does'n exists</h1>`
          );
        }
        res.end();
      });
    } else if (req.url === "/drop") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query(dropdb, (err) => {
        !err
          ? res.end("<title>Drop db</title><h1>Table dropped</h1>")
          : res.end("<title>Drop db</title><h1>Error dropping table</h1>");
      });
    } else if (req.url === "/insert") {
      res.writeHead(200, { "Content-Type": "text/html" });
      insertIntoTable(time, temperature, snowfall).then(() => {
        res.end("<title>Insert into db</title><h1>Table inserted</h1>");
      });
    } else if (req.url === "/create") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query(createdb, (err, resut) => {
        !err
          ? res.end("<title>Create db</title><h1>Table created</h1>")
          : res.end("<title>Create db</title><h1>Table creation failed</h1>");
      });
    } else if (req.url === "/avg") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query("SELECT * FROM weather", (err, result) => {
        const time = [];
        const temperature = [];
        const snowfall = [];
        result.forEach((el) => {
          time.push(JSON.stringify(el.time).slice(1, 17));
          temperature.push(el.temperature);
          snowfall.push(el.snowfall);
        });
        res.end(
          `<title>Zadatak 5</title><h1>${coldestAvgDay(
            sortDaily(time, temperature),
            time
          )}</h1><h1>${coldestDay(
            sortDaily(time, temperature),
            time
          )}</h1><h1>${coldestDayByCount(
            sortDaily(time, temperature),
            time
          )}</h1>`
        );
      });
    } else if (req.url === "/update") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query("SELECT * FROM weather;", (err, result) => {
        apiWeather().then((weather) => {
          for (let i = 0; i < weather.temperature.length; i++) {
            if (weather.temperature[i] !== result[i].temperature) {
              conn.query(dropdb);
              conn.query(createdb);
              insertIntoTable(
                weather.time,
                weather.temperature,
                weather.snowfall
              );
              res.write("<title>Update db</title><h1>Table updated</h1>");
              break;
            } else if (i == weather.temperature.length - 1) {
              res.write("<title>Update db</title><h1>Table not updated</h1>");
            }
          }
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<html>
          <head>
            <title>Home</title>
            <style>
            .button {
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
              }
              
              .button1 {background-color: #4CAF50;} /* Green */
              .button2 {background-color: #008CBA;} /* Blue */
              .button3 {background-color: #CC3215;} /* Red */
              .button4 {background-color: #F44336;} /* Orange */
              .button5 {background-color: #E91E63;} /* Purple */
              .button6 {background-color: #9C27B0;} /* Pink */
            </style>
          </head>
          <body>
            <button
                class = "button button1"
                onclick="window.location.href='http://localhost:3000/weather';" >List Weather
            </button>
              <button
              class = "button button6"
              onclick="window.location.href='http://localhost:3000/avg';" >Zadatak 5
            </button>
            <button
                class = "button button2"
                onclick="window.location.href='http://localhost:3000/update';" >Update db
              </button>
              <button
                class = "button button3"
                onclick="window.location.href='http://localhost:3000/drop';" >Drop db
              </button>
              <button
                class = "button button4"
                onclick="window.location.href='http://localhost:3000/create';" >Create db
              </button>
              <button
                class = "button button5"
                onclick="window.location.href='http://localhost:3000/insert';" >Insert into db
              </button>
          </body>
        </html>`
      );
    }
  })
  .listen(3000);
