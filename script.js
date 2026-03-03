// Скрипт: показывает дату/время и приветствие, + кнопка "быстрый факт"
function pad(n){ return String(n).padStart(2,'0'); }

function renderTime(){
  const el = document.getElementById('clock');
  if(!el) return;
  const d = new Date();
  el.textContent = `${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
setInterval(renderTime, 1000);
renderTime();

function hello(){
  const name = prompt("Как тебя зовут? (можно оставить пустым)");
  const out = document.getElementById("hello");
  if(out){
    out.textContent = name && name.trim()
      ? `Привет, ${name.trim()}! Добро пожаловать на учебный сайт.`
      : `Привет! Добро пожаловать на учебный сайт.`;
  }
}

function fact(){
  const facts = [
    "HTML отвечает за структуру страницы.",
    "CSS отвечает за стиль и оформление.",
    "Тег <video> вставляет видео, а <audio> — аудио.",
    "Списки бывают нумерованные и маркированные."
  ];
  alert(facts[Math.floor(Math.random()*facts.length)]);
}

window.addEventListener("DOMContentLoaded", () => {
  // Автоприветствие только на главной
  if(document.body.dataset.page === "home"){
    hello();
  }
});