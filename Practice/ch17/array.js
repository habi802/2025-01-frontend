const myArray = [true, 3.14, 'Hello', { name: '홍길동' }];

console.log('myArray', myArray);
console.log('myArray.length', myArray.length);

// 2번 방에 있는 데이터 읽어와서 콘솔에 출력
console.log('myArray[2]', myArray[2]);
console.log("myArray['2']", myArray['2']);
console.log('typeof myArray', typeof myArray);

myArray[4] = '홍홍홍';
console.log('myArray', myArray);
console.log('myArray.length', myArray.length);

myArray[6] = '신사임당';
console.log('myArray', myArray);
console.log('myArray.length', myArray.length);
console.log('myArray[5]', myArray[5]);
//console.log('myArray.5', myArray.5); // 숫자 속성은 .으로 접근 불가. 대괄호로만 가능!

// 배열에 아이템 추가 시 push 메소드를 활용한다.
const myArray2 = [];
console.log('myArray2.length', myArray2.length);
myArray2.push('안녕');
myArray2.push(3.14);
myArray2.push(true);
myArray2.push(false);
myArray2.push( {age: 12} );

console.log('myArray2', myArray2);
console.log('myArray2.length', myArray2.length);

const pop = myArray2.pop(); // 마지막 요소 제거, 파괴 메소드
console.log('pop', pop);
console.log('myArray2', myArray2);
console.log('myArray2.length', myArray2.length);

myArray2.splice(1, 1); // 1번 방부터 1개 아이템 제거
console.log('myArray2', myArray2);
console.log('myArray2.length', myArray2.length);
