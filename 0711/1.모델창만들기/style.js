const btnBoard= document.querySelector('#open'); //버튼 id를 가져옴
const modal = document.querySelector('.black-bg'); 




//JS문법
btnBoard.addEventListener('click', ()=>{
  document.querySelector('.black-bg').classList.add('show')
});

// //jQuery
// $('#open').on('click',()=>{
//   $('.black-bg').addClass('show');
// })


const abc= document.querySelector('#close');

//JS
abc.addEventListener('click',function(){
  modal.classList.remove('show')
});

//jQuery
// $('#close').on('click',()=>{
//   // $('.black-bg').removeClass('show');
//   $('.black-bg').fadeOut();
// } )