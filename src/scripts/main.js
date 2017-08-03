$(function () {
  $('.items .table-row').each(function(){
    $(this).hide();
     if($(this).data('type') === 'phone') {
       $(this).fadeIn();
     }
 });

  $('#offers-container li').on('click', function () {
    var choosenCategory = $(this).data('category');
    $('.items .table-row').each(function(){
      $(this).hide();
       if($(this).data('type') === choosenCategory) {
         $(this).fadeIn();
       }
   });

    $(this).addClass('selected').siblings().removeClass('selected');
  })
})
