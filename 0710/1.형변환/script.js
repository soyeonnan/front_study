//불린으로 형변환
//뭔가 존재한다 싶으면 true
//없다는 느낌은 전부 false

let a =Boolean(1); //1은 트루 0은펄스+문자는 트루
//그래서 내용이 있으면 트루, 없으면 펄스
console.log(typeof a, a);

console.log("   "); //스페이스도 인식해서 내용 있는거임

//null, undefined, NaN 이런 느낌들은 펄스
a = Boolean(null);
console.log(typeof a,a);

//연산자 (+,-,*,/,%,**)
let x =  y = z = 10+20;

// 논리연산자 ( &&, ||, ! )
//비트연산자( &, |, ~, ^, >>, <<)

//동등연산자 ( == )
let num1 = 10;

// pronpt로 사용자에세 숫자 하나를 입력받아서 입력받은 숫자와 num1에 있는 값이 같은지 다른지 결과를 출력
// let num2 = prompt("숫자를 입력하시오");
let num2 = "10";

//== 연산자 : 자료형 상관없이 같냐라고 물어봄
// !=  (같지 않다)
console.log(num1==num2);
console.log(false==0);
console.log(""==0); 

//=== 연산자 : 일치 연산자의 엄격 버전 ( 자료형까지 구분 )
// !== (같다?)
console.log(num1===num2);
console.log(false===0);
console.log(""===0); 

