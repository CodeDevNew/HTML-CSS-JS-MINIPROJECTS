const btns = document.querySelectorAll(".btn");
const body = document.body;

//console.log(btns);

btns.forEach((btn) => {
  return btn.addEventListener("click", () => {
    let colors = btn.dataset.value;
    changeBackgroundColor(colors);
  });
});

function changeBackgroundColor(colors) {
  //console.log(colors);
  body.className = "";

  switch (colors) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;

    case "red":
      body.classList.add("red");
      break;

    case "green":
      body.classList.add("green");
      break;

    case "yellow":
      body.classList.add("yellow");
      break;

    case "teal":
      body.classList.add("teal");
      break;

    default:
      break;
  }
}
