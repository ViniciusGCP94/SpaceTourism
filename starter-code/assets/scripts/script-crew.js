document.addEventListener("DOMContentLoaded", function() {
    const currentPagePath = window.location.pathname;
    const pageButtons = document.querySelectorAll(".page-buttons li a");
  
    pageButtons.forEach(button => {
        const buttonPath = button.getAttribute("href");
        if (buttonPath === currentPagePath) {
          button.classList.add('active');
        }
        button.addEventListener("click", function(event) {
            event.preventDefault();

        pageButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const nextPage = this.getAttribute("href");
      window.location.href = nextPage;
    });
  });
});