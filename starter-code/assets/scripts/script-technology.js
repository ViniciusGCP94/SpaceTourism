document.addEventListener("DOMContentLoaded", function() {
    const currentPagePath = window.location.pathname;
    const pageButtons = document.querySelectorAll(".menu-buttons li a"); 
    const image = document.querySelector(".technology img");
    const info = document.querySelector(".technology-info .info");

    function setActiveButton() {
        pageButtons.forEach(button => {
            const buttonPath = button.getAttribute("href");
            if (buttonPath === currentPagePath) {
                button.classList.add('active');
            }
        });
    }

    setActiveButton();

    function pageTransition(event) {
        event.preventDefault();

        image.classList.add("transition-effect", "fade-out");
        info.classList.add("transition-effect", "blur-out");

        const nextPage = this.getAttribute("href");

        setTimeout(function() {
            window.location.href = nextPage;
        }, 500); 
    
        setTimeout(function() {
            image.classList.remove("fade-out");
            image.classList.add("fade-in");

            info.classList.remove("blur-out");
            info.classList.add("fade-in");
        }, 1000);
    }

    pageButtons.forEach(button => {
        button.addEventListener("click", pageTransition);
    });
});