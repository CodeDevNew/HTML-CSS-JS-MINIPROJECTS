const indicator = document.querySelector(".scrollbar-indicator .progress");
// console.log(indicator);
const scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(scrollHeight);

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
  // console.log(scrolled);
}
