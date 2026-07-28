const PASSWORD_HASH = "423ed5a97a34c30e";
const SESSION_KEY = "wellToughAdmin";

function fnv1a64(value) {
  let hash = BigInt("0xcbf29ce484222325");
  const prime = BigInt("0x100000001b3");
  for (let index = 0; index < value.length; index += 1) {
    hash ^= BigInt(value.charCodeAt(index));
    hash = BigInt.asUintN(64, hash * prime);
  }
  return hash.toString(16).padStart(16, "0");
}

function showAdmin() {
  document.getElementById("loginPanel").hidden = true;
  document.getElementById("adminApp").hidden = false;
}

function showLogin() {
  document.getElementById("loginPanel").hidden = false;
  document.getElementById("adminApp").hidden = true;
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.getElementById("adminPassword").value;
  const error = document.getElementById("loginError");

  if (fnv1a64(password) === PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, "true");
    error.textContent = "";
    showAdmin();
  } else {
    error.textContent = "Incorrect password.";
  }
});

document.getElementById("logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
});

document.getElementById("printButton").addEventListener("click", () => {
  document.querySelectorAll(".phase-list details").forEach((detail) => {
    detail.open = true;
  });
  window.print();
});

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  showAdmin();
} else {
  showLogin();
}
