//nav
$(document).ready(function () {
    var status = true

    $(window).scroll(function () {
        var sct = $(document).scrollTop()
        if (sct > 800 && status == true) {
            status = false;
            $('#header').addClass('on');
        } else if (sct < 800 && status == false) {
            status = true
            $('#header').removeClass('on');
        }
    })

})

$(document).ready(function () {
    var status = true
})


//main
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

$(document).ready(function () {
    var status = true

    $(window).scroll(function () {
        var sct = $(document).scrollTop()
        if (sct >= 400 && status == true) {
            status = false;
            $('#header').addClass('on');
        } else if (sct < 390 && status == false) {
            status = true
            $('#header').removeClass('on');
        }
    })

})






// skill

$(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 200 && scene01Num == 1) {
            scene01Num = 0;
            console.log('ok')
            $('#skill .box1').stop().delay(0).css({ right: '270px' })
                .animate({ right: '30px' }, 1000);
            $('#skill .box2').stop().delay(500).css({ right: '270px' })
                .animate({ right: '50px' }, 1000);
            $('#skill .box3').stop().delay(1000).css({ right: '270px' })
                .animate({ right: '90px' }, 1000);
            $('#skill .box4').stop().delay(1500).css({ right: '270px' })
                .animate({ right: '110px' }, 1000);
        }
        else if (scrollTop < 100 && scene01Num == 0) {
            scene01Num = 1;
            $('#skill .box1').stop().css({ right: '270px' })
                .animate({ right: '30px' }, 1000);
            $('#skill .box2').stop().css({ right: '270px' })
                .animate({ right: '50px' }, 1000);
            $('#skill .box3').stop().css({ right: '270px' })
                .animate({ right: '90px' }, 1000);
            $('#skill .box4').stop().css({ right: '270px' })
                .animate({ right: '110px' }, 1000);
        }
    });
});
