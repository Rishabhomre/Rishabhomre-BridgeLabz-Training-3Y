
$(function () {
  let current = 0;
  const $banners = $(".banner");

  $("#hide").on("click", function () { $("#banner1").hide(); });
  $("#show").on("click", function () { $banners.show(); });
  $("#slideUp").on("click", function () { $banners.slideUp(); });
  $("#slideDown").on("click", function () { $banners.slideDown(); });
  $("#fadeOut").on("click", function () { $banners.fadeOut(500); });
  $("#fadeIn").on("click", function () { $banners.fadeIn(500); });

  // Rotate one banner at a time every five seconds using fade effects.
  $banners.hide().eq(0).show();
  setInterval(function () {
    const $visible = $banners.eq(current);
    const next = (current + 1) % $banners.length;
    $visible.fadeOut(400, function () {
      $banners.eq(next).fadeIn(400);
      current = next;
    });
  }, 5000);
});
