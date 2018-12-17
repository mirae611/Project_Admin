'use strict';

$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function() {
    //nav
    $('header a.nav_btn').on('click', function() {
        $('nav').toggleClass('open');
    });

    //nav menu
    navMenu();
    function navMenu() {
        $('nav > ul > li').each(function() {
            if($(this).find('li').length > 0) {
                $(this).find('> a').append('<i class="fas fa-angle-down arrow"></i>');
            }
        });
        $('nav > ul > li > a').on('click', function() {
            if($(this).parent().hasClass('open')) {
                $(this).parent().find('> ul').css({'height': 0});
                $(this).parent().removeClass('open');
            } else {
                var height = 0;
                $(this).parent().find('> ul > li').each(function() {
                    height += $(this).outerHeight();
                });
                $(this).parent().find('> ul').css({'height': height});
                $(this).parent().addClass('open');
            }
        });            
    }
});

