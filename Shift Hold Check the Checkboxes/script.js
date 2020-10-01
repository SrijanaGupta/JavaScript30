const checkboxes = document.querySelectorAll('.inbox input');

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", checkAll));
let lastChecked;

function checkAll(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log(this);
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

console.log(checkboxes);
