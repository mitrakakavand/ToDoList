async function loadHeader() {
  const headerContainer = document.getElementById("header");
  if (!headerContainer) return;

  try {
    const res = await fetch("/header.html");
    if (!res.ok) throw new Error('Header fetch failed: ' + res.status);
    const html = await res.text();
    headerContainer.innerHTML = html;
  } catch (err) {
    console.error('Could not load header:', err);
  }

  // --- dropdown menu ---
  const toggle = headerContainer.querySelector('.dropdown-toggle');
  const menu = headerContainer.querySelector('.dropdown-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  }

  // --- Login / Logout ---
  const authButtons = headerContainer.querySelector("#auth-buttons");
  const userBox = headerContainer.querySelector("#user-box");
  const loginBtn = headerContainer.querySelector("#login-btn");
  const logoutBtn = headerContainer.querySelector("#logout-btn");

  if (loginBtn && logoutBtn && authButtons && userBox) {
    userBox.style.display = "none";
    authButtons.style.display = "flex";

    loginBtn.addEventListener("click", () => {
      authButtons.style.display = "none";
      userBox.style.display = "flex";
    });

    logoutBtn.addEventListener("click", () => {
      userBox.style.display = "none";
      authButtons.style.display = "flex";
    });
  }
}

window.addEventListener("DOMContentLoaded", loadHeader);
