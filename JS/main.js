$(document).ready(function () {
  $(".menu-button").click(function () {
    $("header").hide(400);
    $(".sidenav").show(400);
    $(".menu-button").hide(400);
    $("main").animate({ padding: "5em" }, 400);
  });
});

$(document).ready(function () {
  $("#up,.menu-item").click(function () {
    $("header").show(400);
    $(".sidenav").hide(400);
    $(".menu-button").show(400);
    $("main").css({ padding: "1em" });
  });
});

$(document).ready(function () {
  $("#long-nav").click(function () {
    $(".sidenav").hide(400);
    $(".sidenav2").show(400);
  });
});

$(document).ready(function () {
  $("#back,.menu-item2").click(function () {
    $("header").show(400);
    $(".sidenav2").hide(400);
    $(".menu-button").show(400);
    $("main").css({ padding: "1em" });
  });
});

$(document).ready(function () {
  $(".read").click(function () {
    $(".more").toggle(400);
  });
});

$(document).ready(function () {
  $(".read2").click(function () {
    $(".more2").toggle(400);
  });
});

$(document).ready(function () {
  $(".read3").click(function () {
    $(".more3").toggle(400);
  });
});

$(document).ready(function () {
  $(".read4").click(function () {
    $(".more4").toggle(400);
  });
});

$(document).ready(function () {
  $(".read5").click(function () {
    $(".more5").toggle(400);
  });
});

$(document).ready(function () {
  $(".read6").click(function () {
    $(".more6").toggle(400);
  });
});

$(document).ready(function () {
  $(".read7").click(function () {
    $(".more7").toggle(400);
  });
});

$(document).ready(function () {
  $(".read8").click(function () {
    $(".more8").toggle(400);
  });
});

$(document).ready(function () {
  $(".read9").click(function () {
    $(".more9").toggle(400);
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
