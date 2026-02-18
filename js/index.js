// let darkmode = localStorage.getItem('darkmode')
// const checkbox = document.getElementById("mod-theme");

// const enableDarkmode = () => {
//   document.body.classList.add('darkmode')
//   localStorage.setItem('darkmode', 'active')
// }

// const disableDrakmode = () => {
//   document.body.classList.remove('darkmode')
//   localStorage.setItem('darkmode', null)
// }

// if(darkmode === "active") enableDarkmode()

// checkbox.addEventListener("change",()=>{
//   darkmode = localStorage.getItem('darkmode')
//   darkmode !== "active" ? enableDarkmode() : disableDrakmode()

// if (checkbox.checked) {
//     document.body.style.color = "white";
//     document.documentElement.style.setProperty("--my-gradient", "black");
//   } else {
//     document.body.style.color = "white";
//     document.documentElement.style.setProperty("black", "--my-gradient");
//   }

// ---------- new behaviors ----------

// theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
function updateIcon() {
  if (document.body.classList.contains('light')) {
    themeIcon.textContent = '🌙';
  } else {
    themeIcon.textContent = '☀️';
  }
}
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.theme = document.body.classList.contains('light') ? 'light' : '';
    updateIcon();
  });
}
if (localStorage.theme === 'light') {
  document.body.classList.add('light');
}
updateIcon();

// typewriter effect for rotating job titles
const phrases = [
  "Full-Stack Developer",
  "React 🔁 Node ⚡",
  "CSS wizard 🚀",
  "Always learning…"
];
let i = 0, j = 0, current = '', isDeleting = false;
const introEl = document.querySelector('.typing');
function type() {
  if (i === phrases.length) i = 0;
  const full = phrases[i];
  current = isDeleting ? full.substring(0, j - 1) : full.substring(0, j + 1);
  introEl.textContent = current;
  if (!isDeleting && current === full) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && current === '') {
    isDeleting = false;
    i++;
    setTimeout(type, 500);
  } else {
    j += isDeleting ? -1 : 1;
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
if (introEl) type();

// scroll reveal for skill cards
const cardObserver = new IntersectionObserver(
  entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.2 }
);
document.querySelectorAll('.card').forEach(c => cardObserver.observe(c));

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