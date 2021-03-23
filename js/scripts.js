$(document).ready(function () {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("button").css("background-color", "green");
    $('p').before('<h3>Title for paragraph</h3>');

    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("button").css("background-color", "");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

});