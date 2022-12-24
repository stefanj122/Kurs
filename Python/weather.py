#!/usr/bin/env python3
import requests
import json
import datetime
from apscheduler.schedulers.background import BlockingScheduler

link = "https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date=2022-12-17&end_date=2022-12-21"
# f = urllib.urlopen(link)
def getWeather(link):
    f = requests.get(link)
    # myfile = f.read()
    data = json.loads(f.text)
    time = data["hourly"]["time"]
    temperature = data["hourly"]["temperature_2m"]
    snowfall = data["hourly"]["snowfall"]
    string = "TIME;TEMPERATURE;SNOWFALL\n"
    for i, x, y in zip(time, temperature, snowfall):
        string += i + ";" + str(x) + ";" + "false;\n" if y == 0 else str(y) + ";\n"
    return string


string = getWeather(link)
file1 = open("Weather.csv", "w")
file1.write(string)
file1.close()


def hasWeatherChanges():
    date = datetime.datetime.now()
    format1 = str(date.year) + "-" + str(date.month) + "-" + str(date.day)
    format2 = str(date.year) + "-" + str(date.month) + "-" + str(date.day + 5)

    link2 = f"https://api.open-meteo.com/v1/forecast?latitude=44.76&longitude=19.22&hourly=temperature_2m,snowfall&timezone=Europe%2FBerlin&start_date={format1}&end_date={format2}"

    string2 = getWeather(link2)
    string1 = open("Weather.csv", "r").read()
    if string1 != string2:
        f = open("Weather.csv", "w")
        f.write(string2)
        f.close()
        print("Weather.csv are changed.")
    else:
        print("Nothing changes.")


sched = BlockingScheduler()
sched.add_job(
    hasWeatherChanges, "interval", seconds=60
)  # will do the print_t work for every 60 seconds

sched.start()
