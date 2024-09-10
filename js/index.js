let checkbox = document.getElementById("mod-theme");
checkbox.addEventListener("change",()=>{
if (checkbox.checked) {
    document.body.style.color = "white";
    document.documentElement.style.setProperty("--my-gradient", "black");
  } 
  if (checkbox.unchecked) {
    document.body.style.color = "white";
    document.documentElement.style.setProperty("black", "--my-gradient");
  }
}) 