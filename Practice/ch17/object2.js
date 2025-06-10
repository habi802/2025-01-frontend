const person2 = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true
  }
};

// '전자공학' 읽어와서 출력
console.log(person2.education.major[1]);