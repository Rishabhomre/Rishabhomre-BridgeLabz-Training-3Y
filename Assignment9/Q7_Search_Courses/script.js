
$(function () {
  const $courses = $(".course");
  $("#courseCount").text("Showing " + $courses.length + " courses");

  // keyup runs filtering as the visitor types.
  $("#courseSearch").on("keyup", function () {
    const query = $(this).val().trim().toLowerCase();
    let count = 0;

    $courses.each(function () {
      const $course = $(this);
      const originalText = $course.find("h3").text();
      const matches = $course.text().toLowerCase().includes(query);

      // Restore the original heading before applying a new match highlight.
      $course.find("h3").text(originalText).css("background", "");
      if (matches) {
        $course.show();
        count++;
        if (query) {
          // Highlight matched text with CSS; keep the original course title intact.
          const index = originalText.toLowerCase().indexOf(query);
          if (index >= 0) {
            const matched = originalText.substring(index, index + query.length);
            $course.find("h3").html(
              $("<span>").text(originalText.substring(0, index)).prop("outerHTML") +
              $("<mark>").text(matched).prop("outerHTML") +
              $("<span>").text(originalText.substring(index + query.length)).prop("outerHTML")
            );
          }
          $course.find("h3").css("background", "#fff2b3");
        }
      } else {
        $course.hide();
      }
    });
    $("#courseCount").text(count + " matching course(s)");
  });

  $("#clearSearch").on("click", function () {
    $("#courseSearch").val("");
    $courses.show().find("h3").each(function () {
      $(this).text($(this).text()).css("background", "");
    });
    $("#courseCount").text("Showing " + $courses.length + " courses");
  });
});
