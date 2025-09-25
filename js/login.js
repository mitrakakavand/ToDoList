const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });
    
    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx+1));
});

// Highlight active header button based on current page
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  if (path.includes('login.html')) {
    document.getElementById('login-header').classList.add('active');
  } else if (path.includes('signUp.html')) {
    document.getElementById('signup-header').classList.add('active');
  }
});