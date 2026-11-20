
// Version 1 is loaded first and assigned to $v1 using noConflict(true).
// Version 2 is loaded after this file in the HTML and uses the normal $ alias.
const $v1 = jQuery.noConflict(true);

$v1(function () {
  // Version 1 rotates the carousel and highlights the active widget.
  let slideIndex = 0;
  const $slides = $v1(".slide");
  setInterval(function () {
    $slides.hide();
    slideIndex = (slideIndex + 1) % $slides.length;
    $slides.eq(slideIndex).fadeIn(300);
  }, 3000);

  $v1(".widget").on("click", function () {
    $v1(".widget").removeClass("highlight");
    $v1(this).addClass("highlight");
  });
});

// Version 2 controls the notification modal and hover tooltips.
$(function () {
  $("#notify").on("click", function () { $("#modal").fadeIn(200); });
  $("#closeModal").on("click", function () { $("#modal").fadeOut(200); });

  // Use the title attribute as a simple tooltip on hover.
  $(".widget").hover(
    function () {
      const tip = $(this).attr("title");
      $(this).data("original-title", tip).removeAttr("title");
      $("<span class='tooltip'></span>").text(tip).appendTo(this);
    },
    function () {
      $(this).attr("title", $(this).data("original-title"));
      $(this).find(".tooltip").remove();
    }
  );
});
