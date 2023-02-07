const code = document.getElementById("code");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");

document.addEventListener("keydown", (event) => {
  code.textContent = event.code;
  key.textContent = event.key;
  keyCode.textContent = event.keyCode;
});
