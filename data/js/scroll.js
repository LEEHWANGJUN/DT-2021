const scrollbar = document.querySelector('.contents');
const saDefaultMargin= 200;
let saTriggerMargin = 0;
const saElementList = document.querySelectorAll('.sa');

const scrollDividerList = document.querySelectorAll('.scroll-bar__divider__name');
const sectionIdList = document.querySelectorAll('.section-divider');
const scrollbarDefaultMargin = window.innerWidth/5;

function horizontalScroll(event){  // 마우스휠 가로스크롤
  scrollbar.scrollLeft -= event.wheelDelta*2;
  event.preventDefault();
  console.log(scrollbar.scrollTop);
  scrollBarNow(scrollbar.scrollLeft);
}

function scrollAnimation(){  // 스크롤 후 나타나는 애니메이션
  if(window.innerWidth > 480){   // PC 버전
    for(const element of saElementList){
      if(element.dataset.saMargin){
        saTriggerMargin  = parseInt(element.dataset.saMargin);
      }else{
        saTriggerMargin = saDefaultMargin;
      }
      if(!element.classList.contains('show')){
        if(window.innerWidth > element.getBoundingClientRect().left + saTriggerMargin  && 0 < element.getBoundingClientRect().right){
          let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
          setTimeout(function(){
            element.classList.add('show');
          }, delay);
        }
      }
      else{
        if(window.innerWidth < element.getBoundingClientRect().left || 0 > element.getBoundingClientRect().right){
          element.classList.remove('show');
        }
      }
    }
  }
  else{   // 모바일 버전
    for(const element of saElementList){
      if(element.dataset.saMargin){
        saTriggerMargin  = parseInt(element.dataset.saMargin);
      }else{
        saTriggerMargin = saDefaultMargin;
      }
      if(!element.classList.contains('show')){
        if(window.innerHeight > element.getBoundingClientRect().top && 0 < element.getBoundingClientRect().bottom ){
          let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
          setTimeout(function(){
            element.classList.add('show');
          }, delay);
        }
      }
      else{
        if(window.innerHeight < element.getBoundingClientRect().top || 0 > element.getBoundingClientRect().bottom){
          element.classList.remove('show');
        }
      }
    }
  }
}

function toggleNow(i){
  for(let j=0;j<scrollDividerList.length;j++){
    scrollDividerList[j].classList.remove('now');
  }
  scrollDividerList[i].classList.add('now');
}

function scrollBarNow(scrollbarLeft){   // 하단 스크롤바 현재 위치 표시
  let scrollbarPos = scrollbarLeft + scrollbarDefaultMargin;
  for(let i=0;i<sectionIdList.length;i++){
    if(scrollbarPos<sectionIdList[1].offsetLeft){
      toggleNow(0);
    }else if(sectionIdList[sectionIdList.length-1].offsetLeft<scrollbarPos){
      toggleNow(sectionIdList.length-1);
    }else if(sectionIdList[i].offsetLeft<=scrollbarPos && scrollbarPos<=sectionIdList[i+1].offsetLeft){
      toggleNow(i);
      console.log(sectionIdList[i].offsetLeft,scrollbarPos);
    }
  }
}

function pageScroll(){  // 하단 스크롤 위치 눌러서 스크롤
    var scrollTarget = document.querySelector(this.dataset.target);
    scrollbar.scrollTo({left:scrollTarget.offsetLeft - scrollbarDefaultMargin, behavior:'smooth'});
    scrollBarNow();
}

window.addEventListener('wheel',horizontalScroll, {passive: false});
for(let i=0;i<scrollDividerList.length;i++){
  scrollDividerList[i].addEventListener('click', pageScroll, true);
}
window.addEventListener('load', scrollAnimation,true);
window.addEventListener('wheel', scrollAnimation,true);
window.addEventListener('scroll', scrollAnimation,true);
window.addEventListener('keydown',scrollAnimation,true);

window.addEventListener('click', function(){
  console.log(scrollbar.scrollLeft);
});