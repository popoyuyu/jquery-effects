$(document).ready(function () {
  $(".clickable").click(function () {
    $("#hermit-showing").slideDown();
    $("#hermit-hidden").slideToggle();
  });
});