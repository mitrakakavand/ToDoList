async function loadHeader() {
  const response = await fetch("../pages/header.html");
  const data = await response.text();
  const header = document.getElementById("header");
  header.innerHTML = data;
//dropdown menu
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
}

window.addEventListener("DOMContentLoaded", loadHeader);
