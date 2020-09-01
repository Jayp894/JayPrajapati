$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots',
        autoplay:true,
    });
    var hamberger = document.querySelector('.hamberger');
    var times = document.querySelector('.times');
    var mobnav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click',function(){
        mobnav.classList.add('open');
    });
    times.addEventListener('click',function(){
        mobnav.classList.remove('open');
    });
    
    
});
