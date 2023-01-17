// nav
$(function () {
    $('.nav li a').mouseenter(function () {
        $(this).css({ color: 'white' })
    })
    $('.nav a').mouseleave(function () {
        $(this).css({ color: 'black' })
    })
})

$(function () {
    var menu = $('.nav > li');
    var contents = $('#main > div');

    $('.nav li').click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();

        var section = $('#main > div').eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tt });
    });


});






// skill

$(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1800 && scene01Num == 1) {
            scene01Num = 0;
            console.log('ok')
            $('#skill .box1').stop().delay(0).css({ right: '400px' })
                .animate({ right: '100px' }, 1000);
            $('#skill .box2').stop().delay(500).css({ right: '400px' })
                .animate({ right: '150px' }, 1000);
            $('#skill .box3').stop().delay(1000).css({ right: '400px' })
                .animate({ right: '350px' }, 1000);
            $('#skill .box4').stop().delay(1500).css({ right: '400px' })
                .animate({ right: '350px' }, 1000);
        }
        else if (scrollTop < 1500 && scene01Num == 0) {
            scene01Num = 1;
            $('#skill .box1').stop().css({ right: '400px' })
                .animate({ right: '100px' }, 1000);
            $('#skill .box2').stop().css({ right: '400px' })
                .animate({ right: '150px' }, 1000);
            $('#skill .box3').stop().css({ right: '400px' })
                .animate({ right: '350px' }, 1000);
            $('#skill .box4').stop().css({ right: '400px' })
                .animate({ right: '350px' }, 1000);
        }
    });
});






// project
$(document).ready(function () {
    $('.right_btn').click(function () {
        $('#project_in>ul>li:first').insertAfter('#project_in>ul>li:last');
    })
})
$(document).ready(function () {
    $('.left_btn').click(function () {
        $('#project_in>ul>li:last').insertBefore('#project_in>ul>li:first');
    })
})