$(document).ready(function()
{
    var altura = $("#my_menu").offset().top;

    $(window).on('scroll',function()
    {
        if($(window).scrollTop() > altura+10)
        {
            $("#my_menu").addClass("floating-menu");
        }else{
            $("#my_menu").removeClass("floating-menu");
        }
    }) 
})