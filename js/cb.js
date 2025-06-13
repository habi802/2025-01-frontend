function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

sum(10, 20);

const fn1 = sum;
fn1(20, 30);

const div = function(n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

div(10, 2);