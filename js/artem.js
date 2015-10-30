function sliderTop(){
    $('.exemple-slider-wrap').slick({
        dots: true,
        infinite:false,
        slidesToShow: 4,
        focusOnSelect: true,
        arrows:false,
        cssEase:'linear'
    });
};

function sliderTop2(){
    $('.rewiews-slider-wrap').slick({
        dots: false,
        infinite:false,
        slidesToShow: 1,
        focusOnSelect: true,
        arrows:true,
        cssEase:'linear'
    });
};

function initFancyBox () {
    $('.fancy-box-foto').fancybox({
            fitToView: true,
            autoSize:false
    });
}

$(document).ready(function() {
    sliderTop();
    sliderTop2();
    initFancyBox();
});