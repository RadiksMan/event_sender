function top_slick(){
    $('.top_section_slider_wrap').slick({
        infinite: true,
        slidesToShow: 1,
        vertical:true,
        autoplay:true,
        verticalSwiping:false,
        swipe:false
    });
}

function topAnimated(){
    setTimeout(function(){
        $('.top_section_animated').addClass("animated");
    },1500)
}
$(document).ready(function(){
    top_slick();
});
$(window).load(function(){
    topAnimated();
});