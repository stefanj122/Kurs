import axios from "axios";

async function getResults(url, data, obj) {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Accept-Encoding": "gzip,deflate,compress",
      },
    });
    obj.Status = "SUCCESS";
    return response.data.result;
  } catch (error) {
    obj.Reason = error.response.data;
    return NaN;
  }
}

async function mathSolver(str) {
  const obj = {
    Status: "FAILURE",
    Value: NaN,
    Expresion: str.expr,
  };
  const mathjs = "http://api.mathjs.org/v4/";

  str.expr.forEach((element) => {
    if (element.match(/[0-9.*/+\-\(\)]/g).length !== element.length) {
      obj.Reason = "Izraz ne smije sadrzati nedozvoljene karaktere.";
      return true;
    }

    if (count("(", element) !== count(")", element)) {
      obj.Reason = "Zagrade moraju biti uredno otvorene i zatvorene";
      return true;
    }
  });
  if (obj.Reason) {
    return obj;
  }

  obj.Value = await getResults(mathjs, str, obj);

  return obj;
}
function count(char, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
}
const expr = { expr: ["-5+(1+4)"], precision: 3 };

mathSolver(expr).then((obj) => {
  console.log(obj);
});
