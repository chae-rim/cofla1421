// skill

$(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 200 && scene01Num == 1) {
            scene01Num = 0;
            console.log('ok')
            $('#skill .box1').stop().delay(0).css({ right: '300px' })
                .animate({ right: '100px' }, 1000);
            $('#skill .box2').stop().delay(500).css({ right: '300px' })
                .animate({ right: '80px' }, 1000);
            $('#skill .box3').stop().delay(1000).css({ right: '300px' })
                .animate({ right: '50px' }, 1000);
            $('#skill .box4').stop().delay(1500).css({ right: '300px' })
                .animate({ right: '50px' }, 1000);
        }
        else if (scrollTop < 100 && scene01Num == 0) {
            scene01Num = 1;
            $('#skill .box1').stop().css({ right: '300px' })
                .animate({ right: '100px' }, 1000);
            $('#skill .box2').stop().css({ right: '300px' })
                .animate({ right: '80px' }, 1000);
            $('#skill .box3').stop().css({ right: '300px' })
                .animate({ right: '50px' }, 1000);
            $('#skill .box4').stop().css({ right: '300px' })
                .animate({ right: '50px' }, 1000);
        }
    });
});
