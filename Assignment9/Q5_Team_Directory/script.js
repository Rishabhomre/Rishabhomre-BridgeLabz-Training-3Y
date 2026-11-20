
$(function () {
  // Clicking a manager highlights the other direct reports in that department.
  $(".manager").on("click", function () {
    const $members = $(this).closest(".department").children(".members").children(".member");
    $members.removeClass("highlight");
    $members.not($(this).closest(".member")).addClass("highlight");
  });

  // The contact paragraph is the next sibling of each employee heading.
  $(".member h3").hover(
    function () { $(this).next(".contact").stop(true, true).slideDown(120); },
    function () { $(this).next(".contact").stop(true, true).slideUp(120); }
  );

  // Department heading click uses children() to style all department members.
  $(".dept-title").on("click", function () {
    $(this).closest(".department").children(".members").children(".member").css("background", "#e8f3ff");
  });

  // Select one employee at random and highlight their siblings.
  $("#randomEmployee").on("click", function () {
    const $all = $(".member");
    const randomIndex = Math.floor(Math.random() * $all.length);
    const $chosen = $all.eq(randomIndex);
    $(".member").removeClass("selected");
    $chosen.addClass("selected");
    $chosen.siblings(".member").addClass("highlight");
  });

  // Traverse to the team parent, then find all member cards to collapse/expand.
  $("#toggleTeam").on("click", function () {
    const $members = $(this).parent().find(".members");
    $members.slideToggle();
  });
});
