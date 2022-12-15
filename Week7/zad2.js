import fs from "fs";

async function promisesRace(fileName) {
  return new Promise((resolve, reject) => {
    try {
      const file = fs.readFileSync(`${fileName}`);
      if (file) {
        resolve(file.toString());
      }
    } catch (e) {
      console.log(e);
    }
  });
}

Promise.race([
  promisesRace("posts.txt"),
  promisesRace("host.txt"),
  promisesRace("text.txt"),
]).then((result) => console.log(result));
