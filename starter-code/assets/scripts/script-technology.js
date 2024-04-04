document.addEventListener("DOMContentLoaded", function() {
    const currentPagePath = window.location.pathname;
    const pageButtons = document.querySelectorAll(".menu-buttons li a");
    const contentContainer = document.querySelector(".technology");
    let currentButton = null;

    pageButtons.forEach(button => {
        const buttonPath = button.getAttribute("href");
        if (buttonPath === currentPagePath) {
            button.classList.add('active');
            currentButton = button;
        }
        button.addEventListener("click", function(event) {
            event.preventDefault();

            if (this === currentButton) {
                return; // Se o botão clicado for o mesmo que já está ativo, não faz nada
            }

            const nextPagePath = this.getAttribute("href");

            // Adiciona classe de blur à página atual
            contentContainer.classList.add('blur');

            // Desloca a próxima página de baixo para cima
            contentContainer.style.transition = "transform 0.5s ease";
            contentContainer.style.transform = "translateY(-100vh)";

            setTimeout(() => {
                // Remove classe de blur após 0.5 segundos
                contentContainer.classList.remove('blur');

                // Redireciona para a próxima página
                window.location.href = nextPagePath;
            }, 500);

            currentButton = this; // Atualiza o botão atual
        });
    });
});
