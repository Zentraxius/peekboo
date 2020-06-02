// $(document).ready(function () {
//   $("p").click(function () {
//     $(".walrus-showing").show();
//   });
// });

$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
