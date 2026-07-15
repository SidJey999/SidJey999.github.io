document.addEventListener("DOMContentLoaded", () => {

    // Плавное появление секций
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Плавный скролл
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });

        });
    });

    // Подсветка активного пункта меню

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // Кнопка "Наверх"

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topButton";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("visible");

        } else {

            topButton.classList.remove("visible");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});
