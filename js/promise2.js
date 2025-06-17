// promise2.js
const p = new Promise((resolve, reject) => {
  resolve('성공'); // then 메소드의 콜백함수가 호출
  //reject('실패!'); // catch 메소드의 콜백함수가 호출
});

p.then(item => {
  console.log('then:', item);
  return '두번째'; //resolve('두번째');
}).then(item => {
  console.log('2 then:', item)
}).catch(item => {
  console.log('catch:', item);
});