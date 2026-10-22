const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const header = document.getElementById("header");


// =========================================
// MOBILE MENU
// =========================================

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const isOpen =
            navigation.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a navigation link

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =========================================
// HEADER HIDE / SHOW ON SCROLL
// =========================================

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY && currentScrollY > 100) {

        header.classList.add("header-hidden");

    } else {

        header.classList.remove("header-hidden");

    }


    lastScrollY = currentScrollY;

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;


        const mailtoURL =
            `mailto:your-email@example.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `${message}`
            )}`;


        window.location.href = mailtoURL;

    });

}
