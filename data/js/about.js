const sectionLetterFront = document.querySelector('.section__letter-front');
const letterFrontTop = document.querySelector('.letter-front__Top');
const letterFrontMiddle = document.querySelector('.letter-front__Middle');
const letterFrontBottom = document.querySelector('.letter-front__Bottom');
let moveFrontTop;
function textAnimation(){
    moveFrontTop = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/3;
    moveFrontMiddle = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/10;
     moveFrontBottom = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/2;
    letterFrontTop.style.transform = `translateX(` + -moveFrontTop +`px)`;
    letterFrontMiddle.style.transform = `translateX(` + -moveFrontMiddle +`px)`;
    letterFrontBottom.style.transform = `translateX(` + -moveFrontBottom +`px)`;
}

window.addEventListener('wheel', textAnimation);
window.addEventListener('keydown',textAnimation);
window.addEventListener('scroll',textAnimation);