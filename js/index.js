let darkmode = localStorage.getItem('darkmode')
const checkbox = document.getElementById("mod-theme");

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDrakmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

checkbox.addEventListener("change",()=>{
if (checkbox.checked) {
    document.body.style.color = "white";
    document.documentElement.style.setProperty("--my-gradient", "black");
  } else {
    document.body.style.color = "white";
    document.documentElement.style.setProperty("black", "--my-gradient");
  }
}) 