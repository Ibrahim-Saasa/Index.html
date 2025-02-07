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
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDrakmode()

// if (checkbox.checked) {
//     document.body.style.color = "white";
//     document.documentElement.style.setProperty("--my-gradient", "black");
//   } else {
//     document.body.style.color = "white";
//     document.documentElement.style.setProperty("black", "--my-gradient");
//   }
}) 

const burgerBtn = document.getElementById("burger");
const closeBtn = document.getElementById("close-svg");

const nav_bar = document.querySelector(".nav-bar");
burgerBtn.addEventListener("click", () => {
  nav_bar.classList.toggle("open");
  burgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  nav_bar.classList.toggle("open");
  burgerBtn.style.display = "block";
  closeBtn.style.display = "none";
});

function sendToWhattsapp() {
  let number = "+918149944253";

  let name = document.getElementById('text').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  var url = "https://wa.me/" + number + "?text=" 
  + "Name : " +name+ "%0a"
  + "Email : " +email+ "%0a"
  + "Message : " +message+ "%0a%0a"

  window.open(url, '_blank').focus();
}