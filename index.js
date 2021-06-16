
// const aboutMe = document.getElementById("summary");

let triggered = false;

const button = document.getElementById("toggleModal");

button.addEventListener("click", () => {
    if (triggered === false) {
        const aboutMe = document.getElementById("summary");
        aboutMe.style.top = "50px";
        triggered = true
    } else {
        // -400px
        const aboutMe = document.getElementById("summary");
        aboutMe.style.top = "-400px";
        triggered = false;
    }

});