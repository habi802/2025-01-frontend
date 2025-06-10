// es5 문법
// 자바 메소드를 구성하는 4가지 요소: 리턴타입, 메소드명, 파라미터, 구현부

// 자바스크립트 함수/메소드를 구성하는 3가지 요소: 메소드명, 파라미터, 구현부
// JS에서는 함수도 1급 객체이다. 즉, 함수명에 함수 객체 주소값이 저장된다.
// JS에서 함수 호출은 함수 주소값 소괄호이다.
function sum(n1, n2) {
  console.log('sum 메소드 호출');
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

sum(1, 2);

const copySum = sum;
copySum(1, 2);

console.log('sum === copySum', sum === copySum);