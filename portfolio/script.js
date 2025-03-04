document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    let observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach(section => {
        section.style.opacity = "0"; // Hide initially
        section.style.transform = "translateY(20px)";
        observer.observe(section);
    });
});