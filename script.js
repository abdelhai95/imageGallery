const panels = document.querySelectorAll(".panel");

// growing the element
const toggleOpen = function () {
  this.classList.toggle("open");
};

// mainpulat upper and bottom texts
const toggleActive = function (e) {
  if (e.propertyName.includes("font")) {
    this.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
