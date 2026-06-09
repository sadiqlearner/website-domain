// LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// TYPING EFFECT
const typing = document.getElementById("typing");

const text = "Frontend Developer and Software Engineering Student";

let index = 0;

function typeText(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);
    }
}

typeText();

// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields");

    }else{

        alert("Message Sent Successfully");

        form.reset();
    }
});

// BACK TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }

    // SCROLL PROGRESS BAR
    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
    progress + "%";
});

// TOP BUTTON CLICK
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});