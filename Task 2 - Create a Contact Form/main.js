function translatePlaceholder() {
  let inputs = document.querySelectorAll(".form__input");
  let labels = document.querySelectorAll(".form__label");
  inputs.forEach(input => {
    input.addEventListener("focus", e => {
      labels.forEach(label => {
        if (label.nextElementSibling === e.target) {
          label.style.top = 0;
          label.style.fontSize = "0.8rem";
        }
      })
      console.log(e.target);
    })
    input.addEventListener("focusout", e => {
      labels.forEach(label => {
        if (label.nextElementSibling === e.target && e.target.value === "") {
          label.style.top = "";
          label.style.fontSize = "";
        }
      })
      console.log(e.target);
    })
  })
}
translatePlaceholder()
