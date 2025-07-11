//실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  { name : 'apple', memo : '빨갛고 맛있는 사과' },
  { name : 'mango', memo : '달달하고 맛있음' },
  { name : 'melon', memo : '그냥 맛있다' }
];

for(let i=0; i<FRUITS.length;i++){
  
  let card = `
    <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./img/${FRUITS[i].name}.jpg" class="card-img-top">
            <div class="card-body">
  
              <h5 class="card-title">${FRUITS[i].name}</h5>
              <p class="card-text">${FRUITS[i].me}</p>
              <button class="btn btn-primary cart">담기</button>
            </div>
          </div>
    </div> 
  `;
  
  // beforebegin : 해당 요소 앞에 html을 넣어줌(형제)
  //afterbegin : 해당 요소 첫번째 자식으로 추가(자식)
  // beforeend : 해당 요소 마지막 자식으로 추가(자식)
  //afterend : 해당 요소 뒤에 넣어줌(형제)
  document.querySelector('.row').insertAdjacentHTML('beforeend',card);

}

const cart = document.querySelectorAll('.cart');

for(let i=0; t<cart.length; i++){
  cart[i].addEventListener('click',(e)=>{
   console.log(e.target);
})

}














let arr = [1,2,3,4,5];
let obj = {
  name : 'Kim',
  age : 20
};

//로컬스토리디에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
localStorage.setItem('arr',arr);
localStorage.setItem('obj',obj);

// json형식으로 변환 "[1,2,3,4,5]" 
// arr인 배열을 문자열(json)로 변환
let arr_json = JSON.stringify(arr);

//배열은 아니지만 배열 구조 (대괄호)가 유지된채로 문자열이 됨
localStorage.setItem('arr',arr_json);

arr = localStorage.getItem('arr');

// 로컬스토리지에서 꺼내와도아직까진 문자열임
console.log(arr,typeof arr);

//문지열인 현태를 다시 배열로 되돌려줌
arr = JSON.parse(arr);

console.log(arr,typeof arr);

  {/* // const cardTitle = document.querySelectorAll('.card-body h5'); */}
  {/* //   const cardMemo = document.querySelectorAll('.card-body p'); */}
  {/* //   const cardImg = document.querySelectorAll('img'); */}

  {/* // for(let i =0; i<FRUITS.length; i++){ */}


{/* 
  // cardTitle[i].innerHTML = FRUITS[i].name;
  // cardMemo[i].innerHTML = FRUITS[i].memo;
  // cardImg[i].setAttributeL('src',`./img/${FRUITS[i].name.jpg}`);



  //이렇게 사용하면 3번씩 반복해서 작업이 오래걸림
  // document.querySelectorAll('.card-body h5')[i].innerHTML = FRUITS[i].name;
  // document.querySelectorAll('.card-body p')[i].innerHTML =FRUITS[i].memo;
  // document.querySelectorAll('img')[i].setAttribute('src',`./img/${FRUITS[i].name}.jpg` );
//                                            속성면, 속성값 */}
// {/* }; */}