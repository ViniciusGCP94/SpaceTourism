document.addEventListener("DOMContentLoaded", function() {
    const currentPagePath = window.location.pathname;
    const destinationButtons = document.querySelectorAll(".destination li a");

    destinationButtons.forEach(button => {
        const buttonPath = button.getAttribute("href");
        if (currentPagePath === buttonPath) {
            button.classList.add('active');
        }
    });

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const body = document.querySelector("body");
            body.classList.add("fade-out");

           
            setTimeout(function() {
                window.location.href = link.href;
            }, 500); 
        });
    });
});