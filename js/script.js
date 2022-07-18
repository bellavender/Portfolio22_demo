// 2022 포트폴리오의 자바스크립트문서 


// 페이지 이동 부드럽게

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });
});


/*
$('.gnb_list>li a').animate({
    scrollTop:$('#Skill').offset().top
},1000);
*/


// 네비게이션 바 이벤트 (헤더)

$(window).scroll(function(){
    let nav = $(window).scrollTop();
    let s1 = $('.Cover').innerHeight()/4
    let s2 = $('#Intro').offset().top-s1;
    if (nav>=s2) {
        $('.gnb_list').stop().animate({top:50});
    } else {
        $('.gnb_list').stop().animate({top:-160});
    }
});



// Skill - 퍼센트 도넛 
const chart1 = document.querySelector('.percent1');
const chart2 = document.querySelector('.percent2');

const chart4 = document.querySelector('.percent4');
const chart5 = document.querySelector('.percent5');
const chart6 = document.querySelector('.percent6');

const chart7 = document.querySelector('.percent7');
const chart8 = document.querySelector('.percent8');
const chart9 = document.querySelector('.percent9');

const makeChart = (percent, classname, color) => {
    let i = 1;
    let chartFn = setInterval(function() {
      if (i < percent) {
        colorFn(i, classname, color);
        i++;
      } else {
        clearInterval(chartFn);
      }
    }, 10);
  }
  
  const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
  }
  
  const replay = () => {
    makeChart(70, chart1, '#7977e2');
    makeChart(70, chart2, '#7977e2');
    makeChart(80, chart4, '#7977e2');
    makeChart(80, chart5, '#7977e2');
    makeChart(50, chart6, '#7977e2');
    makeChart(80, chart7, '#7977e2');
    makeChart(60, chart8, '#7977e2');
    makeChart(50, chart9, '#7977e2');
  }
  
  makeChart(70, chart1, '#7977e2');
  makeChart(70, chart2, '#7977e2');
  makeChart(80, chart4, '#7977e2');
  makeChart(80, chart5, '#7977e2');
  makeChart(50, chart6, '#7977e2');
  makeChart(80, chart7, '#7977e2');
  makeChart(60, chart8, '#7977e2');
  makeChart(50, chart9, '#7977e2');




// 도넛 새로고침

/*
// div에 replay 건거라 오류가 있음 
$(".skill_in").on('mousewheel', function(e){
    let wheel = e.originalEvent.wheelDelta;
    if(wheel<=-50){
        replay();
    }
  });

*/



/*
$(window).scroll(function(){
    let skill =$(window).scrollTop();
    let sk1 = $('#Skill').height();
    if(self.name !='reload'){
        self.name = 'reload';
        self.location.reroad(true);
      }
      else self.name=''
});
*/



/*
function 함수이름(){
    $('#Skill').load(window.location.href +'#Skill');
}
*/
// https://saem-ee.tistory.com/20




// 슬라이더 

$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 800,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 743,
            settings: {
                // arrows: true,
                slidesToShow: 3,
                slidesToScroll: 3,
           }
        }, {
            breakpoint: 375,
            settings: {
                // arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
       }
        }]
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
    
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


// 클릭 이미지 
// $(document).ready(function(){
//     $('.group1').colorbox();
// });
// 모듈창 연결하는 코드 짜려고 했는데 html로 구현 실패, colorbox스크립트 삽입하기로





// top 버튼 (상단으로 이동)
$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});
// top 버튼 상단 이동 스르륵 효과
$('.top').click(function(){
    $('html,body').animate({scrollTop : 0}, 400);
    return false;
});
