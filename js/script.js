$(document).ready(function () {
  $("pohovor-priklad, pohovor-pokus").on("click", "pohovor-title", function () {
    $(this)
      .toggleClass("red")
      .siblings("pohovor-body")
      .slideToggle("slow", function () {});
    return false;
  });
});


