function top_slick(){
    $('.top_section_slider_wrap').slick({
        infinite: true,
        slidesToShow: 1,
        vertical:true,
        autoplay:true,
        verticalSwiping:false,
        swipe:false,
        responsive:true,
    });
    $('.top_section_slider_wrap').on('afterChange', function (event, slick, currentSlide, nextSlide){
        $('.slide').removeClass('active');
        $('.slide[data-slide='+(currentSlide+1)+']').addClass('active');
    });
}

function topAnimated(){
    setTimeout(function(){
        $('.top_section_animated').addClass("animated");
    },1000)
}
$(document).ready(function(){
    top_slick();
});
$(window).load(function(){
    topAnimated();
});