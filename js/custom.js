$(document).ready(function () {

    'use strict'

    var scrollTop = $('.scrollTop');

    // Preloader


    $('.preloader').delay(1000).slideUp(2000);
    $('.loader').fadeOut(1000);

    // ScroolTop

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 400) {
            scrollTop.slideDown()
        } else {
            scrollTop.slideUp()
        }
    })

    scrollTop.on('click', function () {
        $('body ,html').animate({
            scrollTop: 0
        }, 2000)
    })

    //animation scroll js
    // var html_body = $('html, body');
    // $('nav a').on('click', function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             html_body.animate({
    //                 scrollTop: target.offset().top - 0
    //             }, 1500, );
    //             return false;
    //         }
    //     }
    // });


    // One Page Nav

    $('.navbar-nav').onePageNav({
        currentClass: 'active-nav',
        scrollSpeed: 2000,
    })

    // Wow Js

    new WOW().init();

    // CountDwon Js

    var element = $('#countdown-gampang');
    var finish_d = new Date();
    finish_d.setDate(finish_d.getDate() + 1);
    element.CountdownGampang({
        rampung: finish_d,
        theme: "flat-colors-very-wide"
    }, function () {
        // callback that is fired when the countdown reaches 0.
        alert("Wes Wayahe Bro :)");
    });

    $("#services .country-list").niceScroll({
        cursorborder: "",
        cursorcolor: "#00F",
        boxzoom: true
    })

});