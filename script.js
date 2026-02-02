let noCount = 0;

function yes() {
  window.location.href = "yes.html";
}

function no() {
  const buttons = document.getElementById("buttons");
  noCount++;

  if (noCount === 1) {
    buttons.innerHTML = `
      <button onclick="yes()">Yes</button>
      <button id="noBtn" onmouseover="runAway()">Really?</button>
    `;
  } else if (noCount === 2) {
    buttons.innerHTML = `
      <button onclick="yes()">Yes</button>
      <button id="noBtn" onmouseover="runAway()">Are you sure?</button>
    `;
  } else {
    buttons.innerHTML = `
      <button onclick="yes()">Yes</button>
    `;
  }
}

function runAway() {
  const btn = document.getElementById("noBtn");

  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}
const reallyBtn = document.getElementById("reallyBtn");

function moveButton() {
  const btnWidth = reallyBtn.offsetWidth;
  const btnHeight = reallyBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  reallyBtn.style.position = "absolute";
  reallyBtn.style.left = randomX + "px";
  reallyBtn.style.top = randomY + "px";
}

// Move on hover (mouse / touch)
reallyBtn.addEventListener("mouseover", moveButton);

// Move on click (mobile friendly)
reallyBtn.addEventListener("click", moveButton);

// Move on touch (extra safety for phones)
reallyBtn.addEventListener("touchstart", moveButton);
