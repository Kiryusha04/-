// Падающие сердечки
const heartsContainer = document.getElementById('hearts-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);
  setTimeout(() => heartsContainer.removeChild(heart), 6000);
}
setInterval(createHeart, 300);

// Счётчик дней вместе
const startDate = new Date("2025-04-08");
function updateDays() {
  const today = new Date();
  const diff = today - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = days;
}
updateDays();
setInterval(updateDays, 1000*60*60); // обновление каждый час