const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));

// 메뉴 토글
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("active");
};

// 맨 위
document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const counters = document.querySelectorAll(".client-stats h3");

counters.forEach((counter) => {
  let target = +counter.innerText.replace(/\D/g, "");
  let count = 0;

  const update = () => {
    count += Math.ceil(target / 30);
    if (count > target) count = target;

    counter.innerText = count + "+";
    if (count < target) requestAnimationFrame(update);
  };

  update();
});
// #region CLIENT SLIDER
const slides = document.querySelectorAll(".slide");
const text = document.getElementById("clientText");

if (slides.length > 0) {
  // 🔥 이거 중요 (에러 방지)

  const messages = [
    "어린이 돌봄센터 점심 제공",
    "기업 단체 도시락 납품",
    "행사 및 스포츠팀 식사 제공",
    "학교 및 기관 급식 지원",
  ];

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
    text.innerText = messages[current];
  }, 2500);
}
// #endregion
