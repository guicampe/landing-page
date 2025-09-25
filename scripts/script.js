const buttonContact = document.querySelectorAll(".contact");

buttonContact.forEach((button) => {
    button.addEventListener("click", () => {
        const phoneNumber = "5546991213629";
        const message = "Olá, gostaria de agendar minha consulta!";
    
        const encodedMessage = encodeURIComponent(message);
    
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        window.open(url);
    })
})


const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");
const prev = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");

let direction = -1;

next.addEventListener("click", () => {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyContent = "flex-start";
        direction = -1;
    }

    slider.style.transition = "all 0.5s";
    slider.style.transform = "translateX(-33.33%)";
});

prev.addEventListener("click", () => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    slider.style.transition = "all 0.5s";
    slider.style.transform = "translateX(33.33%)";
    carousel.style.justifyContent = "flex-end";
});

slider.addEventListener("transitionend", () => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(function() {
        slider.style.transition = "all 0.5s";
    })
});

let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleGesture();
});

function handleGesture() {
    const difference = startX - endX;

    if (Math.abs(difference) > 50) {
        if (difference > 0) {
            next.click();
        } else {
            prev.click();
        }
    }
}

const expandButtons = document.querySelectorAll(".question");
const chevrons = document.querySelectorAll(".fa-chevron-down");

expandButtons.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("active");

        const chevronTurn = question.querySelector(".fa-chevron-down");

        if (answer.classList.contains("active")) {
            chevronTurn.classList.add("turning");
            question.style.borderBottom = "none";
        } else {
            chevronTurn.classList.remove("turning");
            question.style.borderBottom = "2px solid var(--button-bg)";
        }
    })
})