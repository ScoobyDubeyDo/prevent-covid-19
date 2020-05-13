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
    $(".sidenav").hide(1000);
    $(".menu-button").show(1000);
    $("main").css({ padding: "1em" });
  });
});

$(document).ready(function () {
  $(".read").click(function () {
    $(".more").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read2").click(function () {
    $(".more2").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read3").click(function () {
    $(".more3").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read4").click(function () {
    $(".more4").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read5").click(function () {
    $(".more5").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read6").click(function () {
    $(".more6").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read7").click(function () {
    $(".more7").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read8").click(function () {
    $(".more8").toggle(1000);
  });
});

$(document).ready(function () {
  $(".read9").click(function () {
    $(".more9").toggle(1000);
  });
});

$(document).ready(function () {
  $("input").click(function () {
    var self = $(this);
    if (self.val() == "Read more") {
      self.val("Read less");
    } else {
      self.val("Read more");
    }
  });
});
