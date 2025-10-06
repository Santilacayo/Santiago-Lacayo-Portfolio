document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // stop the immediate navigation
      const href = this.getAttribute('href');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 500); // matches the CSS transition duration
    });
  });