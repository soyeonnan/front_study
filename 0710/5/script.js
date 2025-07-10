// 객체(object) - 자바에서 Map과 유사
// Key, value 가 한 쌍으로 구성

let user = {
  //키 : 벨류
  name : '홍길동',
  age : 20, // 따옴표를 안 쓰면 연결이 안 됨

  'math score' : 100 //이게 되긴 하지만 이렇게 쓰지 않는 걸 선호
}

console.log(user.name);
console.log(user.age);
// console.log(user[age]); -> 이건 배열방이 없어서 불러오질 못 함
console.log(user['math score']);

//상수는 대문자를 쓰는데 여기선 안 써도 됨(오브젝트 같은 경우에만!->수정, 변경하려면)
const member = {
  name :'홍길동',
  age : 20
}

console.log(user);
user = 10;
console.log(user);

//member = 10; -> 당연히 상수니까 변경을 못 함

//상수지만 큰 구조는 변경하지 않고 안쪽 내용만 수정은 가능함
member.name="김자바";
console.log(member); //맴버는 주소를 가지고 있다고 생각하면 됨

//이름을 보고 싶은지 나이를 보고 싶은지 입력받음
let key = "name";

console.log(member[key]); //user ["name"]

let item = "바나나"; //벨류를 변경하면 변경 됨

let cart = {
  [item] : 5
};

console.log(cart);

//10명의 회원정 보가 각 각 담긴 객체 10개를 생성 
