// const promise = new Promise(function (resolveFunction, rejectFunction) {
//   // Ovdje ide kod koji ce potrajati neko vrijeme
//   resolveFunction("OK"); // ova funkcija se izvrsava ako je sve ok
//   rejectFunction("Error"); // ova funkcija se izvrsava ako dodje do problema
// });

// // ovo je kod koji konzumira promise i mora cekati na rezultat
// promise.then(
//   function (value) {
//     console.log(value);
//     // ovaj kod ce se izvrsiti ako je promise uspio
//   },
//   function (error) {
//     console.log(error);
//     // ovaj kod ce se izvrsiti u slucaju greske
//   }
// );
// console.log("I'm still the number one!");
import fs from "fs";
// const promise2 = new Promise(function (resolve, reject) {
//   try {
//     const file = fs.readFileSync("text.txt");
//     if (file) {
//       resolve(file.toString());
//     }
//   } catch (e) {
//     reject("File not Found");
//   }
// });

// promise2.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );
async function readTestFile() {
  const promise2 = new Promise(function (resolve, reject) {
    try {
      const file = fs.readFileSync("text.txt");
      if (file) {
        resolve(file.toString());
      }
    } catch (e) {
      reject("File not Found");
    }
  });

  const res = await promise2;
  console.log(res);
}

readTestFile();
