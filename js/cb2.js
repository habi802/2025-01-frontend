const div = function(n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

const calc = function(cb, n1, n2) {
  cb(n1, n2);
}

calc(sum, 10, 20);
calc(div, 10, 2);
calc(function(n1, n2) {
  console.log(n1 * n2);
}, 30, 2);

// calc 호출하여 calc(fn, 10, 20); 더 큰 수가 콘솔에 출력되도록 해주세요.
const fn = (n1, n2) => console.log(n1 > n2 ? n1 : n2);
calc(fn, 10, 20);