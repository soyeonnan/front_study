const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-cotent');

function clearClassList() {
  for (let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
}

function clearClassList() {
  
}

document.querySelector('.list').addEventListener('click',(e) =>{
  let no = e.target.dataset.no;

  if (no!== undefined){
    
    clearClassList();
    btns[no].classList.add('selected');
    contents[no].classList.add('show');

  }

})