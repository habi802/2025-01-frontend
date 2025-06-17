// promise3.js, 콜백 지옥에 빠진 callback_hell2.js를 promise를 이용하여
// 콜백 지옥에서 해방
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('A');
    resolve('B');
  }, 3000);
});

p.then(item => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve('C');
    }, 2000);
  });
}).then(item => {
  setTimeout(() => {
    console.log(item);
  }, 1000);
});