currentimg = 0;
function showSlide(num) {
    const slides = document.querySelectorAll('.box')
    if (num === slides.length) {
        currentimg = 0;
        num = 0;
    }
    if (num < 0) {
        currentimg = slides.length -1;
        num = slides.length -1;
    }
    for (let y of slides) {
        y.style.display = 'none';
    }
    slides[num].style.display = 'block';                                                                                                                            
}
showSlide(currentimg);
function controls(x) {
    currentimg = currentimg + x;
    showSlide(currentimg);
}
