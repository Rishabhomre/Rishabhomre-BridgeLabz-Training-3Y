
$(function () {
  let subscribed = false;

  // Attach topic click handlers with on(), including to dynamically added topics.
  function attachTopicEvents() {
    $(".topic").off("click.topic").on("click.topic", function () {
      $(this).toggleClass("selected");
      $("#status").text("Selected topic: " + $(this).text());
      refreshRemoveOptions();
    });
  }

  function refreshRemoveOptions() {
    const $select = $("#removeTopic").empty();
    $(".topic").each(function () {
      $("<option>").val($(this).text()).text($(this).text()).appendTo($select);
    });
  }

  attachTopicEvents();
  refreshRemoveOptions();

  $("#subscribe").on("click", function () {
    subscribed = true;
    $("#status").text("Successfully subscribed. Notifications are enabled.");
  });
  $("#unsubscribe").on("click", function () {
    subscribed = false;
    $("#status").text("You have unsubscribed. Notifications are disabled.");
  });

  $("#addTopic").on("click", function () {
    const name = $("#newTopic").val().trim();
    if (!name) { $("#status").text("Please enter a topic name."); return; }
    $("<button>").addClass("topic").text(name).appendTo("#topics");
    // Re-run the delegated setup so the newly inserted topic gets a click handler.
    attachTopicEvents();
    refreshRemoveOptions();
    $("#newTopic").val("");
    $("#status").text("New topic added: " + name);
  });

  $("#remove").on("click", function () {
    const name = $("#removeTopic").val();
    // off() detaches the topic-specific click handler before removing that topic.
    $(".topic").filter(function () { return $(this).text() === name; }).off("click.topic").remove();
    refreshRemoveOptions();
    $("#status").text(name ? "Removed topic: " + name : "No topic available to remove.");
  });
});
