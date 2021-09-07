const sectionLetterFront = document.querySelector('.section__letter-front');
const sectionLetterEnd = document.querySelector('.section__letter-end');
const letterFrontTop = document.querySelector('.letter-front__Top');
const letterFrontMiddle = document.querySelector('.letter-front__Middle');
const letterFrontBottom = document.querySelector('.letter-front__Bottom');
const letterEndMORY = document.querySelector('.letter-end__MORY');
const letterEndRY = document.querySelector('.letter-end__RY');
let moveFrontTop, moveFrontMiddle, moveFrontBottom;
let moryAlpha, ryAlpha;

function textAnimation(){
    moveFrontTop = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/3;
    moveFrontMiddle = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/10;
    moveFrontBottom = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/2;
    letterFrontTop.style.transform = `translateX(` + -moveFrontTop +`px)`;
    letterFrontMiddle.style.transform = `translateX(` + -moveFrontMiddle +`px)`;
    letterFrontBottom.style.transform = `translateX(` + -moveFrontBottom +`px)`;
/*
    console.log(sectionLetterEnd.getBoundingClientRect().left);
    moryAlpha = 
    letterEndMORY.style.fill = `rgba(0,0,0,` + moryAlpha + `)`;*/
}

window.addEventListener('wheel', textAnimation,true);
window.addEventListener('keydown',textAnimation,true);
window.addEventListener('scroll',textAnimation,true);
