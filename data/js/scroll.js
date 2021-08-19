const scrollbar = document.querySelector('.contents');
const saDefaultMargin= 200;
let saTriggerMargin = 0;
const saElementList = document.querySelectorAll('.sa');

function horizontalScroll(event){
    event.preventDefault();
    scrollbar.scrollLeft -= (event.wheelDelta*2 || -event.detail);
}

function scrollAnimation(){
  for(const element of saElementList){
    if(element.dataset.saMargin){
      saTriggerMargin  = parseInt(element.dataset.saMargin);
      console.log(saTriggerMargin);
    }else{
      saTriggerMargin = saDefaultMargin;
    }
    if(!element.classList.contains('show')){
      if(window.innerWidth > element.getBoundingClientRect().left + saTriggerMargin  && 0 < element.getBoundingClientRect().right){
        element.classList.add('show');
      }
    }
    else{
      if(window.innerWidth < element.getBoundingClientRect().left || 0 > element.getBoundingClientRect().right){
        element.classList.remove('show');
      }
    }
  }
}


document.addEventListener('wheel',horizontalScroll, {passive:false});
window.addEventListener('load', scrollAnimation);
window.addEventListener('wheel', scrollAnimation);
window.addEventListener('keydown',scrollAnimation);