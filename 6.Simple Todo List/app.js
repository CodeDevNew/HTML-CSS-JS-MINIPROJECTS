const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});

function getTodo(value) {
  let todo = document.createElement("div");
  let textElement = document.createElement("span");

  todos.appendChild(todo);
  todo.classList.add("todo");

  textElement.innerHTML = value;
  todo.appendChild(textElement);

  let closeElement = document.createElement("span");

  todo.appendChild(closeElement);

  closeElement.innerHTML = "&times";
  closeElement.classList.add("delete");

  closeElement.addEventListener("click", () => {
    todos.removeChild(todo);
  });

  return todo;
}
