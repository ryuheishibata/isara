$(function() {
 
  $('#back a').on('click',function(){
    $('body, html').animate({
      scrollTop:0
    }, 800);
      return false;
  });
 
});


$(function(){
$(".dltd").on("click", function() {
$(this).next().slideToggle();
});
});


$(function(){
    $("dt").mouseover(function(){
        $("dt").addClass('dt-ext');
    });
 
    $("dt").mouseout(function(){
        $("dt").removeClass('dt-ext');
    });
});

jQuery(function ($) {
$('.article-title').on('click', function () {
  /*クリックでコンテンツを開閉*/
  $(this).next().slideToggle(200);
  /*矢印の向きを変更*/
  $(this).toggleClass('open');
});

});