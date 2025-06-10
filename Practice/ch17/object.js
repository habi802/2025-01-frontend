const person1 = {
  name: '김철수',
  age: 25,
  married: false
};

console.log(typeof person1);
console.log(person1);

console.log(person1.name);
console.log(person1.age);
person1.age = 30;
console.log('person1.age', person1.age);
console.log("person1['age']", person1['age']);

person1.job = 'programmer';
person1['bloodtype'] = 'O';
console.log(person1);