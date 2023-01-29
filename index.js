$(function () {
  "use strict";

  $(".menu__item").on("mouseenter", function () {
    let id = $(this).data("id");
    $("#" + id + "-bg__img").addClass("active");
  });
  $(".menu__item").on("mouseleave", function () {
    $(".menu-img img").removeClass("active");
  });
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
