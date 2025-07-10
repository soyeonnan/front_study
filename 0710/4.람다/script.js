//화살표 함수 : 자바에 람다와 유사함
// 함수 작성하는 코드를 간결하게 만들 수 있음

// function sum(a,b) {
//   return a+b;
// }

let sum = (a,b) => a+b;  //위 function이랑 같음 (한 줄이라서 리턴을 생략할 수 있음)


let sum2 = (a,b) => {
   return a+b;     //이게 원칙임 (길어질 때 무조건 리턴 써야 됨)
};

let a = () => {
  console.log('aaa');
};

sum(10, 5);
a();