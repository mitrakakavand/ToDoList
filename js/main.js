//load for header
async function loadHeader() {
  const response = await fetch("header.html"); 
  const data = await response.text();
  document.getElementById("header").innerHTML = data;
}
window.addEventListener("DOMContentLoaded", loadHeader);
