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
      <button id="noBtn">Really?</button>
    `;
  } else if (noCount === 2) {
    buttons.innerHTML = `
      <button onclick="yes()">Yes</button>
      <button id="noBtn">Are you sure about it?</button>
    `;
  } else {
    buttons.innerHTML = `
      <button onclick="yes()">Yes</button>
    `;
  }

  makeRunAway();
}

function makeRunAway() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  noBtn.addEventListener("click", no);
}
