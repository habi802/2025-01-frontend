// 배열의 여러값을 하나의 값으로 변경할 때 사용
// 주로 모든 값 더하기 할 때 사용
const arr = [ 11, 32, 7, 19, 40, 56, 57 ];
const result = arr.reduce((prev, next) => {
  console.log('prev:', prev, ', next:', next);
  return prev + next;
});
console.log('result:', result);

const result2 = arr.reduce((prev, next) => {
  console.log('prev:', prev, ', next:', next);
  return prev + next;
}, 0);
console.log('result2:', result2);