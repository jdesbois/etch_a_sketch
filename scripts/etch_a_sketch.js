var $div = $("<div class='square'> </div>");


$(document).ready(function(){
$('input[name=color]').change(function(){
  var color = ($('input[name=color]:checked').val());
  console.log(color);
});
});
$(document).ready(function() {
  $('header').on('click','.create', function(){
    var i = 0;
    var x = prompt('How many squares? Max = 1536');
    while (x > 1536) {
      x = prompt('Thats too many, how many squares?');
    };
    while (i < x){
      $('.container').append($div.clone());
      i++;
  };
    $('.container').on('mouseenter', '.square', function(){
      $(this).addClass('color1');
});
$('header').on('click','.clear',function(){
  $('div').removeClass('color1');
});
$('header').on('click','.removeGrid',function(){
  $('.container').find('div').remove();
  });
});


});
