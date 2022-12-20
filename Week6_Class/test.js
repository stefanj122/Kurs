function sad(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 5000);
  });
}

async function f1() {
  const x = await sad({ name: "Stefan" });
  console.log(x);
}
// console.log(f1())
f1();
console.log("Prije");
