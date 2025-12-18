document.getElementById("btn").addEventListener("click", () => {
  let selectOp = document.querySelector(".selectOperator").value;
  let result = document.querySelector(".result");
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;

  switch (selectOp) {
    case "add":
      result.innerHTML = Number(num1) + Number(num2);
      break;

    case "sub":
      result.innerHTML = Number(num1) - Number(num2);
      break;

    case "mul":
      result.innerHTML = Number(num1) * Number(num2);
      break;

    case "div":
      result.innerHTML = Number(num1) / Number(num2);
      break;

    default:
      break;
  }
});
