// window 객체(웹브라우저의 창(window))의 width(), height()로 지정
$(window).resize(function(){
    // .tubl : tubular 플러그인 적용 요소
    //         동영상이 풀스크린으로 나온 뒤 .wrapper영역은 스크롤시 보이도록 하기 위해 해당 영역의 크기 조절
    $('.visual_bg').width($(window).width()).height($(window).height());
});

setTimeout(function(){
    $(window).resize()
}, 1000);

// 메인 - vegas jquery plugin 배경이미지 슬라이드 효과
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

// 메인 - Owl Carousel로 .imgslide 영역에 이미지 슬라이드 효과 적용
$('.imgslide').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:false
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