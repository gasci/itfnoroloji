$.get("/static/head.html", function (data) {
    $('head').append(data);
});
$.get("/static/navbar.html", function (data) {
    $(data).insertBefore("body");
    $('#nav-mobile li a').css('text-decoration', 'none').css('color', 'white');
    $('a').css('text-decoration', 'none');
});

$(document).ready(function () {

    $('body').addClass('container');

    $('.sidenav').sidenav();


});