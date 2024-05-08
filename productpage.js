$(function () {
    // 預設將子導覽列關閉
    $('.skincare-wrap > .productlist-sublist').slideToggle(0);

    $('#sublist-btn1').click(function(){
        $('.skincare-wrap > .productlist-sublist').stop(true).slideToggle(500, 'easeInOutQuint');
        if ($('#sublist-btn1').text().trim() == '▲') {
            $('#sublist-btn1').text('▼');
        } else {
            $('#sublist-btn1').text('▲');
        }
    });
});

$(function () {
    // 預設將子導覽列關閉
    $('.cleansing-wrap > .productlist-sublist').slideToggle(0);

    $('#sublist-btn2').click(function(){
        $('.cleansing-wrap>.productlist-sublist').stop(true).slideToggle(500, 'easeInOutQuint');
        if ($('#sublist-btn2').text().trim() == '▲') {
            $('#sublist-btn2').text('▼');
        } else {
            $('#sublist-btn2').text('▲');
        }
    });
});

$(function () {
    // 預設將子導覽列關閉
    $('.other-information-txt').slideToggle(0);

    $('#other-information-btn').click(function(){
        $('.other-information-txt').stop(true).slideToggle(1000, 'easeInOutQuint');
        if ($('#other-information-btn').text().trim() == '▲') {
            $('#other-information-btn').text('▼');
        } else {
            $('#other-information-btn').text('▲');
        }
    });
});


// $(function () {
//     // 預設將子導覽列關閉
//     $('.header-sub-nav').slideToggle(0);

//     $('#sublist-btn3').click(function () {
//         $('.header-sub-nav').stop(true).slideToggle(1500, 'linear');
//         if ($('#sublist-btn3').text().trim() == '▲') {
//             $('#sublist-btn3').text('▼');
//         } else {
//             $('#sublist-btn3').text('▲');
//         }
//     });
// });


let menubutton = document.getElementById('header-hb');
let navmenusecond = document.getElementById('header-main-nav');
menubutton.addEventListener('click', function () {
    if (navmenusecond.classList.contains('active')) {
        navmenusecond.classList.remove('active');
    } else {
        navmenusecond.classList.add('active');
    }
});