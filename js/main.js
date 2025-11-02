async function loadHeader() {
  try {
    const response = await fetch("/pages/header.html");
    if (!response.ok) throw new Error('Header fetch failed: ' + response.status);
    const data = await response.text();
    const header = document.getElementById("header");
    header.innerHTML = data;
  } catch (err) {
    console.error('Could not load header:', err);
  }

  // --- dropdown menu ---
  const toggle = header.querySelector('.dropdown-toggle');
  const menu = header.querySelector('.dropdown-menu');

  if(toggle && menu) {
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
  const authButtons = header.querySelector("#auth-buttons");
  const userBox = header.querySelector("#user-box");
  const loginBtn = header.querySelector("#login-btn");
  const logoutBtn = header.querySelector("#logout-btn");

  if(loginBtn && logoutBtn && authButtons && userBox){
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
