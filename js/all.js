$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "3500px 0px"
    });
    observer.observe();
    //navbar menu 收合
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-light .navbar-toggler ').attr("aria-expanded", "false");
    });
    //navbar menu動態
    $('.navbar-nav>li>a[href="#"], .logo-router>h1>a').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 500);
    });
    $('.navbar-nav>li>a[href="#section1"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top - 56,
        }, 500);
    });
    $('.navbar-nav>li>a[href="#section2"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#section2').offset().top - 56,
        }, 500);
    });
    $('.navbar-nav>li>a[href="#section3"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#section3').offset().top - 56,
        }, 500);
    });
    $('.navbar-nav>li>a[href="#section4"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#section4').offset().top - 56,
        }, 500);
    });
    $('a[href="#buy"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#buy').offset().top + 150,
        }, 500);
    });
    // 立即訂購btn動態
    $('.buybtn').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top + 150,
        }, 900);
    });

    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw = $(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://bit.ly/2YsVvUj");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }
});

