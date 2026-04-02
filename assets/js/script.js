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
