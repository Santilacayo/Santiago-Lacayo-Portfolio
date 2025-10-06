if (localStorage.getItem('fadeInNextPage') === 'true') {
    document.body.style.opacity = 1; // trigger layout
    requestAnimationFrame(() => {
      document.body.style.opacity = 0;
      requestAnimationFrame(() => {
        document.body.style.opacity = 1;
        localStorage.removeItem('fadeInNextPage');
      });
    });
  } else {
    document.body.style.opacity = 1; // no fade needed on refresh
  }

  function openTab(id) {
    window.location.href = id + ".html"; 
  }