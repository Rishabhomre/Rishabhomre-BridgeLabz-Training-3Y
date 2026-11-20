
$(function () {
  let postNumber = 5;

  $("#addPost").on("click", function () {
    postNumber++;
    // append() inserts a new post at the end of the post list.
    $("#posts").append(`<article class="post item"><h2>New Blog Post ${postNumber}</h2><p>This post was added dynamically.</p></article>`);
  });

  $("#featuredPost").on("click", function () {
    // prepend() places the featured post before all existing posts.
    $("#posts").prepend('<article class="post item"><strong>★ FEATURED</strong><h2>Featured: jQuery in Action</h2><p>Explore interactive web experiences.</p></article>');
  });

  $("#removePost").on("click", function () {
    $("#posts").children(".post").last().remove();
  });

  $("#addTags").on("click", function () {
    $(".post").each(function (index) {
      if (!$(this).prev(".tag").length) $(this).before('<span class="tag">Blog</span> ');
      if (!$(this).next(".tag").length) $(this).after(' <span class="tag">#Learning</span>');
    });
    $(".tag").css({color: "#1769aa", fontWeight: "bold"});
  });

  $("#highlightKeywords").on("click", function () {
    // Find posts whose text contains a selected keyword and highlight the whole post.
    $(".post").each(function () {
      const text = $(this).text().toLowerCase();
      $(this).toggleClass("highlight", ["jquery", "data science", "machine learning"].some(k => text.includes(k)));
    });
  });
});
