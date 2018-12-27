const lock = require('./index');

function delay(timeout = 0) {
  return new Promise(((resolve) => {
    setTimeout(resolve, timeout);
  }));
}

let sem = 0;
[1,2,3,4,5,6].forEach((t) => {
  lock(async () => {
    console.log(t, 'start');
    console.log(t, sem);
    await delay(Math.random() * 100);
    sem = t;
    console.log(t, 'end');
  })
});
