async function startJob(nuberOfTasks) {
  return new Promise(function (resolve, reject) {
    try {
      if (!isNaN(nuberOfTasks)) {
        setTimeout(() => {
          resolve(`[${nuberOfTasks}] tasks finished.`);
        }, 2000);
      } else {
        throw new Error("Invalid inpput!");
      }
    } catch (err) {
      reject("Number of tasks is not valid!!!");
    }
  });
}
startJob(-1).then(
  function (res) {
    console.log(res);
  },
  function (err) {
    console.log(err);
  }
);

// const sad = await startJob(-1);
// console.log(sad);
