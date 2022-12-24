function startJob(numberOfTasks) {
  return new Promise(function (resolve, reject) {
    try {
      if (!isNaN(+numberOfTasks) && numberOfTasks > 0) {
        setTimeout(() => {
          resolve(`[${numberOfTasks}] tasks finished.`);
        }, 2000);
      } else {
        throw new Error("Invalid inpput!");
      }
    } catch (err) {
      reject("Number of tasks is not valid!!!");
    }
  });
}
startJob(1).then(
  function (res) {
    console.log(res);
  },
  function (err) {
    console.log(err);
  }
);

// const sad = await startJob(-1);
// console.log(sad);
