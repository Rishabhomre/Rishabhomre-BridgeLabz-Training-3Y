
$(function () {
  // Click a question to show or hide only its answer.
  $(".question").on("click", function () {
    $(this).next(".answer").stop(true, true).slideToggle();
  });

  // Hover styling is removed when the pointer leaves the question.
  $(".question").hover(
    function () { $(this).css("color", "#1769aa"); },
    function () { $(this).css("color", ""); }
  );

  // Double-click any question to collapse every answer.
  $(".question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp();
  });

  // Focus and blur on an answer input update its parent question.
  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").children(".question").css("background", "#fff2b3");
  }).on("blur", function () {
    $(this).closest(".faq-item").children(".question").css("background", "");
  });
});
