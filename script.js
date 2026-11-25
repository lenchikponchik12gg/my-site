const greetBtn = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");
const themeBtn = document.getElementById("theme-btn");

greetBtn.addEventListener("click", () => {
  greeting.textContent = "Привет! JavaScript работает.";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Светлая тема"
    : "Тёмная тема";
});
