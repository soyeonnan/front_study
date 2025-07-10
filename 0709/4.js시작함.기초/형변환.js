//문자로 변환
let a = true;
console.log(typeof a);
a = String(a);
console.log(typeof a,a);

let b = undefined;
console.log(typeof b );
b = String(b);
console.log(typeof b,b);

//숫자 형변환

console.log("12"/"5"); //자동 형변환 (문자인데 숫자로 나옴)

let c = "123";
c = Number(c); //? 왜 안뜸?  + 변수이름을 두번 적는 이유

let d = Number("absdfdg");
console.log(typeof d,d);
//변환 불가능한 것들 -> NaN
//undefined -> NaN
//null -> 0
// true, false -> 1,0

// 문자열 -> 양쪽 공백 제거를 먼저 함
//->남는게 없으면 0
//숫자만 남으면 숫자로 변환
//못 봐꾸면 NaN

let e = Number("    123    ");
console.log(typeof e,e);

let f = Number("          ");
console.log(typeof f,f);

let g = Number("    a1s2   "); //
console.log(typeof g,g);