const accordionBtn = document.querySelectorAll(".accordion-btn");

function hideAll(exceptThis) {
  for (var i = 0; i < accordionBtn.length; i++) {
    if (accordionBtn[i] !== exceptThis) {
      accordionBtn[i].nextElementSibling.style.maxHeight = null;
      accordionBtn[i].classList.remove("is-open");
    }
  }
}

accordionBtn.forEach((accordionEvent) => {
  accordionEvent.onclick = function () {
    this.classList.toggle("is-open");

    let nextElement = this.nextElementSibling;

    if (nextElement.style.maxHeight) {
      nextElement.style.maxHeight = null;
    } else {
      nextElement.style.maxHeight = nextElement.scrollHeight + "px";
      hideAll(this);
    }
  };
});
