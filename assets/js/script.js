// #region FADE-UP 애니메이션
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));
// #endregion

// #region 메뉴 토글
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.onclick = () => {
    navMenu.classList.toggle("active");
  };
}
// #endregion

// #region 맨 위 버튼
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
// #endregion

// #region CLIENT SLIDER
const slides = document.querySelectorAll(".slide");
const text = document.getElementById("clientText");

if (slides.length > 0 && text) {
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
  }, 2000);
}
// #endregion
