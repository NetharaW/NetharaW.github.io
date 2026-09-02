/* =================================
   FLOATING AVATAR
================================= */

const floatingAvatar =
    document.querySelector(".floating-avatar");

const homeSection =
    document.querySelector("#home");

const aboutSection =
    document.querySelector("#about");

const educationSection =
    document.querySelector("#education");


function updateAvatar() {

    const scrollPosition = window.scrollY;

    const aboutTop =
        aboutSection.offsetTop;

    const educationTop =
        educationSection.offsetTop;


    /*
        HOME

        Show GitHub avatar
    */

    if (scrollPosition < aboutTop - 150) {

        floatingAvatar.classList.remove(
            "show-graduation"
        );

        floatingAvatar.classList.remove(
            "hide-avatar"
        );

        return;
    }


    /*
        ABOUT ONLY

        Show graduation avatar
    */

    if (
        scrollPosition >= aboutTop - 150 &&
        scrollPosition < educationTop - 150
    ) {

        floatingAvatar.classList.add(
            "show-graduation"
        );

        floatingAvatar.classList.remove(
            "hide-avatar"
        );

        return;
    }


    /*
        EDUCATION + EVERYTHING AFTER

        Hide avatar
    */

    floatingAvatar.classList.remove(
        "show-graduation"
    );

    floatingAvatar.classList.add(
        "hide-avatar"
    );

}


window.addEventListener(
    "scroll",
    updateAvatar
);

window.addEventListener(
    "load",
    updateAvatar
);
/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(
        ".about-content, .skill-card, .project-card, .contact-card"
    );


revealElements.forEach(
    element => {
        element.classList.add("reveal");
    }
);


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element => {
        revealObserver.observe(element);
    }
);


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(
        section => {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 300
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        link => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.style.color =
                    "#a855f7";

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav
);