$(".menu_button").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("active");
  //return false;
});