let acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}

// accordion-content




// if (panel.style.display === "block") {
//   panel.style.display = "none";
// } else {
//   panel.style.display = "block";
// }
// this.classList.toggle("form-body__form-item_active");
// this.classList.toggle("form-body__item-button_active");