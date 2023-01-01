import axios from "axios";

async function getResults(url, obj) {
  try {
    const response = await axios.get(url, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    obj.Status = "SUCCESS";
    return response.data;
  } catch (error) {
    obj.Reason = error.response.data;
  }
}

async function makeUrl(str) {
  const obj = {
    Status: "FAILURE",
    Value: NaN,
    Expresion: str,
  };
  const arr = str.match(/[0-9.*/+\-\(\)]/g);
  let mathjs = "http://api.mathjs.org/v4/?expr=";
  if (arr.length !== str.length) {
    obj.Reason = "Izraz ne smije sadrzati nedozvoljene karaktere.";
    return obj;
  }
  if (str.match(/\(/g).length !== str.match(/\)/g).length) {
    obj.Reason = "Zagrade moraju biti uredno otvorene i zatvorene";
    return obj;
  }
  mathjs += str;
  obj.Value = await getResults(mathjs, obj);
  obj.Value = obj.Value == undefined ? NaN : obj.Value;

  return obj;
}
const expr = "2*(6/3)";
console.log(await makeUrl(expr));
