let currentPostion = 0;
const slidesToShow = 3;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function slide(direction){
    currentPostion +=direction;
    if(currentPostion<0){
        currentPostion = totalSlides-slidesToShow;
    }
    if(currentPostion>=totalSlides-slidesToShow+1){
        currentPostion=0;
    }
    document.querySelector('.sliderImages').style.transform = `translateX(-${currentPostion * 300}px)`;
    
}

function toggleTxt(element) {
    const description = element.parentElement.nextElementSibling;
    const toggleSign = element;

    if (description.style.maxHeight === '0px' || description.style.maxHeight === '') {
        description.style.maxHeight = description.scrollHeight + '10px';
        description.style.padding = '5px';
        toggleSign.textContent = '-';
    } else {
        description.style.maxHeight = '0px';
        description.style.padding = '0px 15px';
        toggleSign.textContent = '+';
    }
}
