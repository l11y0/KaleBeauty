// $(function () {
//     // 預設將子導覽列關閉
//     $('.header-sub-nav').slideToggle(0);

//     $('#sublist-btn1').click(function () {
//         $('.header-sub-nav').stop(true).slideToggle(1500, 'linear');
//         if ($('#sublist-btn1').text().trim() == '▲') {
//             $('#sublist-btn1').text('▼');
//         } else {
//             $('#sublist-btn1').text('▲');
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

