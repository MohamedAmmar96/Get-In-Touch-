$(window).on('load',function()
{
   
    $(".loading-overlay img").fadeOut(1000,
      function()
      {
        $(this).parent().fadeOut(1000);
        $("body").removeClass("overflow")
      });
})
$(document).ready(function(){
    $(".switch-btn").click(function()
       {
            $("body").toggleClass("overflow");
            $(".one").toggleClass("first");
            $(".two").toggleClass("center");
            $(".three").toggleClass("last");
            $(".arabic").toggleClass("show-hide");
            $(".menu").fadeToggle(600);
        });
    });