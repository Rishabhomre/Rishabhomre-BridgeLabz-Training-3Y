
$(function () {
  // Attribute selector gives discounted products a distinct appearance.
  $('[data-discount="true"]').css({background: "#eaffea", border: "2px solid #43a047"});

  $(".product").on("click", function (event) {
    if ($(event.target).closest(".favorite").length) return;
    $(this).toggleClass("selected");
    // Read the stock state from the product's data attribute.
    if ($(this).attr("data-stock") === "out") alert("Sorry, this product is out of stock.");
  });

  $(".product").hover(
    function () { $(this).find(".details").stop(true, true).slideDown(150); },
    function () { $(this).find(".details").stop(true, true).slideUp(150); }
  );

  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected").text($(this).hasClass("selected") ? "★ Favorited" : "☆ Favorite");
  });
});
