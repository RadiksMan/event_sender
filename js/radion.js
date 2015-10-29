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
$(document).ready(function(){
    top_slick();
});