import * as mysql from "mysql2";
import http from "http";
import { compareWeather } from "./../Week7_Promise/zad5_weather.js";
import {
  readFromCsv,
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
let { time, temperature, snowfall } = readFromCsv();

function insertIntoTable() {
  const { time, temperature, snowfall } = readFromCsv();
  const timeSql = time.map((time) => {
    return time.replace("T", " ") + ":00";
  });
  for (let i = 0; i < time.length; i++) {
    conn.query(
      "INSERT INTO weather VALUE(NULL,'" +
        timeSql[i] +
        "'," +
        temperature[i] +
        ",'" +
        snowfall[i] +
        "');"
    );
  }
}

http
  .createServer((req, res) => {
    if (req.url === "/weather") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query("SELECT * FROM weather;", (err, result, fields) => {
        let str = `<style>td,th{text-align: center;}</style><table border=1px border-collapse= collapse
           width=50%><tr><td width=60%>TIME</td><td width=20%>TEMPERATURE</td><td width=20%>SNOWFALL</td></tr>`;

        if (result) {
          result.forEach((row) => {
            str += `<tr><td>${row.time}</td><td>${row.temperature}</td><td>${row.snowfall}</td></tr>`;
          });
          str += "</table>";
          res.write(str);
        }
        res.end();
      });
    } else if (req.url === "/drop") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query("DROP TABLE IF EXISTS weather", () => {
        res.end("<h1>Table dropped</h1>");
      });
    } else if (req.url === "/insert") {
      res.writeHead(200, { "Content-Type": "text/html" });
      insertIntoTable();
      res.end("<h1>Table inserted</h1>");
    } else if (req.url === "/create") {
      res.writeHead(200, { "Content-Type": "text/html" });
      conn.query(
        "CREATE TABLE IF NOT EXISTS weather (id int(11) not null auto_increment primary key,time datetime default null,temperature float(15) null,snowfall varchar(20) null);",
        () => {
          res.end("<h1>Table created</h1>");
        }
      );
    } else if (req.url === "/avg") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>${coldestAvgDay(
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
    } else if (req.url === "/update") {
      res.writeHead(200, { "Content-Type": "text/html" });
      compareWeather().then((result) => {
        if (result) {
          conn.query("DROP TABLE IF EXISTS weather");
          conn.query(
            "CREATE TABLE IF NOT EXISTS weather (id int(11) not null auto_increment primary key,time datetime default null,temperature float(15) null,snowfall varchar(20) null);",
            () => {
              insertIntoTable();
              res.end("<h1>Table updated</h1>");
            }
          );
        } else {
          res.end("<h1>Table not updated</h1>");
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(
        `<html>
          <head>
            <title>Title of the document</title>
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
            </style>
          </head>
          <body>
            <button
                class = "button button1"
                onclick="window.location.href='http://localhost:3000/weather';" >List Weather
            </button>
              <button
              class = "button button2"
              onclick="window.location.href='http://localhost:3000/avg';" >Zadatak 5
            </button>
            <button
                class = "button button3"
                onclick="window.location.href='http://localhost:3000/update';" >Update db
              </button>
              <button
                class = "button button1"
                onclick="window.location.href='http://localhost:3000/drop';" >Drop db
              </button>
              <button
                class = "button button2"
                onclick="window.location.href='http://localhost:3000/create';" >Create db
              </button>
              <button
                class = "button button3"
                onclick="window.location.href='http://localhost:3000/insert';" >Insert into db
              </button>
          </body>
        </html>`
      );
    }
  })
  .listen(3000);
