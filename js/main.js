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
    var current = 0
    var setIntervalId;


    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 2) {
                n = 0;
            }
            move(n);
        }, 3000)

    }
    function move(n) {
        var currentEl = $('.monitor_in li').eq(current);
        var nextEl = $('.monitor_in li').eq(n);


        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });


        current = n;
    }
});
