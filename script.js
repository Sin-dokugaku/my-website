// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
    console.log("ページが読み込まれました！");

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for header
                    behavior: "smooth",
                });
            }
        });
    });

    // Highlight Active Navigation Link on Scroll
    const sections = document.querySelectorAll("main section");
    const options = {
        threshold: 0.5, // 50% of section visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const navLink = document.querySelector(`header nav ul li a[href="#${id}"]`);
            
            if (entry.isIntersecting && navLink) {
                document.querySelectorAll("header nav ul li a").forEach(link => link.classList.remove("active"));
                navLink.classList.add("active");
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});
