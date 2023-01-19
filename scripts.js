function myFunction() {
  const element = document.getElementById("titles");
  element.scrollIntoView();
};

$(document).ready(function(){
  $('.burgermenu').on('click', function(){
      $('.mob-nav').toggle();
  })
});





