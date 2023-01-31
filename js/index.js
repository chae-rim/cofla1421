window.addEventListener("wheel", function (e) {
    e.preventDefault();
}, { passive: false });

var $html = $("html");
var page = 1;
var nextPage = $("#profile").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
    if ($html.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
        if (page == nextPage) return;
        page++;
    } else if (e.originalEvent.deltaY < 0) {
        if (page == 1) return;
        page--;
    }
    var posTop = (page - 1) * $(window).height();
    $html.animate({ scrollTop: posTop });
});



//main
var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작 
}

function typing() {
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++;
    } else { //한문장이끝나면
        //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
        if (liIndex >= liLength - 1) {
            liIndex = 0;
        } else {
            liIndex++;
        }

        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        setTimeout(function () {
            $(".typing").html('');
            tyInt = setInterval(typing, 100);
        }, 1000);
    }
}

// new TypeIt(".main_txt", {
//     speed: 100,
//     waitUntilVisible: true,
// })
//     .type("진득함", { delay: 300 })
//     .move(0, { delay: 300 })
//     .delete(3, { delay: 300 })
//     .type("배려심", { delay: 300 })
//     .move(0, { delay: 300 })
//     .delete(3, { delay: 300 })
//     .type("책임감", { delay: 300 })
//     .move(0, { delay: 300 })
//     .delete(3, { delay: 300 })
//     .type("아이디어", { delay: 300 })
//     .move(0, { delay: 300 })
//     .delete(4, { delay: 300 })
//     .type("긍정", { delay: 300 })
//     .move(0, { delay: 300 })
//     .delete(2, { delay: 300 })
//     .type("꼼꼼함", { delay: 300 })
//     .pause(300)
//     .delete(3, { delay: 300 })
//     .type("안녕하세요,", { delay: 300 })
//     .break({ delay: 500 })
//     .type("웹퍼블리셔 박채림입니다.", { delay: 300 })
//     .go();




// nav
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





$(function () {
    var menu = $('.nav > li');
    var contents = $('#wrap > section');

    $('.nav li').click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();

        var section = $('#wrap > section').eq(i);
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