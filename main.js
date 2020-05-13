$(document).ready(function () {
  $(".menu-button").click(function () {
    $("header").hide(1000);
    $(".sidenav").show(1000);
    $(".menu-button").hide(1000);
    $("main").animate({ padding: "5em" }, 1000);
  });
});

$(document).ready(function () {
  $("#up,.menu-item").click(function () {
    $("header").show(1000);
    $(".sidenav").hide(100);
    $(".menu-button").show(1000);
    $("main").css({ padding: "1em" });
  });
});
