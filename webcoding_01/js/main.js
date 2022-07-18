//0501 메인 자바스크립트 

$('.gnb').mouseenter(function(){
    $(this).stop().animate({
        height : 315
    });
    $('.subBg').stop().slideDown();
    }).mouseleave(function(){
    $(this).stop().animate({
        height : 50
    });
    $('.subBg').stop().slideUp();
    return false;
});


//메인슬라이드 
$('.main_slide').slick({
    // arrows :
    dots : true,
    autoplay : true,
    autoplaySpeed : 7000,
    speed : 900
});