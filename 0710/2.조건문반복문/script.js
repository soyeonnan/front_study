//조건문

//if문
let age = 20;

if(age >= 20){
  console.log("성인");
}else if (age>=12){
  console.log("청소년");
}else  {
  console.log("어린이");
}

//삼합연산자
// 조건식 ? 참 : 거짓
let result = age >= 20 ? "성인 " : "청소년";

//switch문
let a =3;

switch(a){
  case 1 :
    console.log("a는 1이다");
    break;

  case 2 :
    console.log("a는 2이다");
    break;
  default :
  console.log("a는1,2가 아니다");
    
}

switch(a){
  case 1 :
    //이렇게 해두면 2로 나옴 (스위치문은 1에서 넘어가야 2로 가니까~)

  case 2 :
    console.log("a는 2이다");
    break;
  default :
  console.log("a는1,2가 아니다");
    
}

switch(a){
  case 1 :
    console.log("a는 1이다");
    break;

  case 2 :
    console.log("a는 2이다");
    break;

  case '2' :
    console.log("a는 문자 2이다");
    break;

  default :
  console.log("a는1,2가 아니다");
    
}

//반복문
//for문
// for(초기값; 조건식; 증감식;) {
//   반복 할 코드
// }

// 1~10까지 합
let num = 0; 

for (let i = 1; i<=10; i++){
  num = num + i ;
}

console.log(num);

let sum=0;
let su=0;

for (let y=1; y<=10; y++){
    
  for (let z=1; z<=y; z++){
    sum=sum+z;
  }

}
console.log(sum);

//while문
// while(조건식) {
//   반복할코드
// }
//반복 종료 break;
//반복문 상단으로 돌아감 - continue;