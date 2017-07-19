//        меняет треугольник в меню
$('#menu li').on('click', function() {
    $(this).addClass('triangle-border').siblings().removeClass('triangle-border');
});

//чтобы не мелькало

//        $(function() {
//            $("#myCarousel").carousel({
//                interval: false
//            });
//        });

//        изменение топа цвета при скроле
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 50) {
                $(".top").addClass("topBlack");
            } else {
                $(".top").removeClass("topBlack");
            }
        });

 //        фиксация .list-inline
        $(window).scroll(function() {
            var clientHeight = document.getElementById('myCarousel').clientHeight;

            if ($(this).scrollTop() > clientHeight) {
                $('#list').addClass('fixed');
            } else {
                $('#list').removeClass('fixed');
            }


            if ($(this).scrollTop() > clientHeight) {
                $('#top').addClass('topfixed');
            } else {
                $('#top').removeClass('topfixed');
            }
        });

// появление popUpVideo затемнение и ссылка img
$( function() {
    $( "#play" ).on( "click", function() {
        $("#popUpVideo").slideDown("fast").show();
        $(".videoNews").addClass('blured', 300, callback());
    });

function callback() {
      setTimeout(function() {
        $( ".videoNews").css('opacity', '0.3');
        $(".rect>a>#play").css('display', 'none');
        $(".rect>a>img").addClass('bigLink');
      }, 350 );
    }
});

//удаление всех добавленных стилей popUpVideo при нажатии .close
$( function() {
    $( "#videoFix" ).on( "click", function() {
        $("#popUpVideo").slideDown("fast").hide();
        $(".videoNews").removeClass('blured', 300, callback());
    });

function callback() {
      setTimeout(function() {
        $( ".videoNews").css('opacity', '1');
        $(".rect>a>#play").css('display', 'block');
        $(".rect>a>img").removeClass('bigLink');
      }, 350 );
    }
});

//Dropdown list-inline
$('ul.list-inline li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeIn(70);
  $(".dropdown>a").css('color', 'white');  
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeOut(70);
    $(".dropdown>a").css('color', '#bfbfb4');
});
