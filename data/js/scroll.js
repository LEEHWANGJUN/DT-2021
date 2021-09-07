const scrollbar = document.querySelector('.contents');
const saDefaultMargin= 200;
let saTriggerMargin = 0;
const saElementList = document.querySelectorAll('.sa');

const scrollDividerList = document.querySelectorAll('.scroll-bar__divider__name');
const sectionStart = document.querySelector('#section__introduce');
const sectionIntro = document.querySelector('#section__about__start');
const sectionOpeningFilm = document.querySelector('#section__opening-film');
const sectionOfflineInfo = document.querySelector('#section__offline-info');
const sectionMadeBy = document.querySelector('#section__made-by');
const sectionContact = document.querySelector('#section__contact');
const sectionEnd = document.querySelector('.section__letter-end');
const scrollbarDefaultMargin = window.innerWidth/6;

function horizontalScroll(event){  // 마우스휠 가로스크롤
  event.preventDefault();
  scrollbar.scrollLeft -= event.wheelDelta*2;
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

function scrollBarNow(){   // 하단 스크롤바 현재 위치 표시
  let scrollbarPos = scrollbar.scrollLeft + scrollbarDefaultMargin;
  if(sectionIntro.offsetLeft > scrollbarPos){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[0].classList.add('now');
    
  }
  else if(sectionIntro.offsetLeft <= scrollbarPos && scrollbarPos < sectionOpeningFilm.offsetLeft){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[1].classList.add('now');
  }
  else if(sectionOpeningFilm.offsetLeft <= scrollbarPos && scrollbarPos < sectionOfflineInfo.offsetLeft){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[2].classList.add('now');
  }
  else if(sectionOfflineInfo.offsetLeft <= scrollbarPos && scrollbarPos < sectionMadeBy.offsetLeft){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[3].classList.add('now');
  }
  else if(sectionMadeBy.offsetLeft <= scrollbarPos && scrollbarPos < sectionContact.offsetLeft){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[4].classList.add('now');
  }
  else if(sectionContact.offsetLeft <= scrollbarPos && scrollbarPos < sectionEnd.offsetLeft){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[5].classList.add('now');
  }
  else if(sectionEnd.offsetLeft <= scrollbarPos){
    for(let i=0;i<6;i++){
      scrollDividerList[i].classList.remove('now');
    }
    scrollDividerList[6].classList.add('now');
  }
}

function pageScroll(){  // 하단 스크롤 위치 눌러서 스크롤
    var scrollTarget = document.querySelector(this.dataset.target);
    scrollbar.scrollTo({left:scrollTarget.offsetLeft - scrollbarDefaultMargin, behavior:'smooth'});
}

scrollBarNow();
document.addEventListener('wheel',horizontalScroll, {passive: false});
for(let i=0;i<scrollDividerList.length;i++){
  scrollDividerList[i].addEventListener('click', pageScroll, true);
}
window.addEventListener('load', scrollAnimation,true);
window.addEventListener('wheel', scrollAnimation,true);
window.addEventListener('scroll', scrollAnimation,true);
window.addEventListener('keydown',scrollAnimation,true);
