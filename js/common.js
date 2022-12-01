// visual 영역을 창크기로 확대
// window 객체(웹브라우저의 창(window))의 width(), height()로 지정
$(window).resize(function(){
    $('.visual_bg').width($(window).width()).height($(window).height());
});

setTimeout(function(){
    $(window).resize()
}, 1000);

// visual 영역에 vegas jquery plugin 배경이미지 슬라이드 효과
$(".visual_bg").vegas({
    animation: 'random',
    delay: 5000,
    slides: [
        { src: '../img/main_bg01.jpg' },
        { src: '../img/main_bg02.jpg' },
        { src: '../img/main_bg03.jpg' },
        { src: '../img/main_bg04.jpg' }
    ],
    overlay: '../img/vegas_overlay_04.png'  //배경이미지 위에 dot pattern 이미지 적용
});

// 홍보센터 영역에 Owl Carousel로이미지 슬라이드 효과 적용
$('.imgslide').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// 오늘 하루 열지 않음 레이어 팝업창
// 쿠키값(today)이 none이면 #popup_today 숨김
if($.cookie('today') == 'none') {
    $('#popup_today').hide();
}
// .closeBtn 요소 클릭하면 체크박스의 체크유무에 따라 쿠키를 생성하여 1일간 저장
var $chk = $("#chk");
$(".closeBtn").on("click", closePop);
function closePop() {
    if($chk.is(":checked")){
        $.cookie("today", "none", {expires:1, path:"/"})
    }
    $("#popup_today").fadeOut("slow");
}