document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Optional: Ensure the correct link is active based on the URL hash on page load
    function setActiveLink() {
      const hash = window.location.hash;
      if (hash) {
        navLinks.forEach(nav => nav.classList.remove('active'));
        const activeLink = document.querySelector(`.navbar a[href="${hash}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    }
  
    setActiveLink();
  
    window.addEventListener('hashchange', setActiveLink);
  });
  