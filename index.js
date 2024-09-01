let checkbox = document.getElementById("mod-theme");
function changeStyle() {
  if (checkbox.checked) {
    // change the style
    document.body.style.color = "black";
    document.documentElement.style.setProperty("--main-color", "white");
  } else {
    document.body.style.color = "white";
    document.documentElement.style.setProperty("--main-color", "#071e2e");
  }
}