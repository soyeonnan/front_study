//알림창 띄우기
// alert("자바스크립트 파일 만듦");

// 출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용 띄우기");

// HTML에 출력해주기(쓸 일 없음)
document.write("문서에 쓰기");

// 변수 만들기
var 변수명; //옛날거 (let의 옛날 이름)
let 변수이름; // 이렇게 사용하면 됨

let msg = 'hello'; //작은 따옴표든 쌍 따옴표든 괜찮은데 통일해야함!
console.log(msg);

//상수
const COLOR = 'red';
// COLOR = 'blue';

let n = 12.345;

console.log( typeof n );
console.log( typeof (n) ); //가로 있든 없든 가능

//실제로 나누기 0은 불가능하지만
//JS 수학적 연산은 전부 처리가 됨
//대신 결과가 안 나오는 건 특수 숫자 값으로 처리
console.log( n/0 ); //infinity도 숫자임 (무한)
console.log( typeof Infinity );
console.log("abc"/2); //NaN도 숫자임
console.log(typeof NaN);

// 문자
// js에서는 문자(열)은 쌍 따옴표, 작은 따옴표, 빽틱
let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`; //빽틱은 중간에 엔터를 쳐도 먹힘


let age = 20;
let name = "홍길동"

//홍길동님의 나이는 20살 입니다.
console.log(name+"님의 나이는"+age+"살 입니다.");
console.log(`${name}님의 나이는 ${age+5}살 입니다.`); //빽틱만 가능
console.log(typeof name);

//불린
let check = true

console.log(10>=5);
console.log(typeof check);

//null 값
//js 에서 null은 존재하지 않음, 비어있다, 알 수 없다.
let a = null;

// undefined : 값을 할당하지 않음
let x;
console.log(x);

// 모델창 띄우기
// alert 메세지만 출력하고 확인 버튼 한개
// alert('메세지 띄우기');

// prompt 메세지를 출력해주고 사용자에게 입력받는 창이 있고
// 확인과 취소 버튼이 있음 
// prompt('메세지',초기값);
// let result = prompt('메세지',20); //초기값이 비어 있으면 껌뻑거리는 것만 나옴
// console.log(result);

let total = Number( prompt('나이를 입력하시오') ); //프롬프트로 입력 받은 것은 문자열로 인식함
// Number 가 형변환임
console.log (total+1);

//confirm 메세지를 출력해주고 확인, 취소 버튼이 있음 
confirm("메세지"); //확인은 트루가 리턴되고 취소를 누르면 펄스가 리턴 됨

let re = confirm("메세지");
console.log(re);