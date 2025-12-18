const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
    ${event.key === " " ? " " : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode === " " ? " " : event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code === " " ? " " : event.code}
    <small>event.code</small>
  </div>
  
  `;
});
