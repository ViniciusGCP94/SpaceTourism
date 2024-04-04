document.addEventListener("DOMContentLoaded", function() {
  const currentPagePath = window.location.pathname;
  const pageButtons = document.querySelectorAll(".page-buttons li a");
  const contentContainer = document.querySelector(".professional");

  pageButtons.forEach(button => {
      const buttonPath = button.getAttribute("href");
      if (buttonPath === currentPagePath) {
          button.classList.add('active');
      }
      button.addEventListener("click", function(event) {
          event.preventDefault();

          const nextPagePath = this.getAttribute("href");

          // Adiciona classe de blur à página atual
          contentContainer.classList.add('blur');

          // Desloca a próxima página da direita para a esquerda
          contentContainer.style.transition = "transform 0.5s ease";
          contentContainer.style.transform = "translateX(-100%)";

          setTimeout(() => {
              // Remove classe de blur após 0.5 segundos
              contentContainer.classList.remove('blur');

              // Redireciona para a próxima página
              window.location.href = nextPagePath;
          }, 500);
      });
  });
});
