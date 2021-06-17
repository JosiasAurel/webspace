
document.getElementById("right").innerText = `Josias Aurel ${new Date().getFullYear()}`

// let currentTheme = localStorage.getItem("theme");

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    let currentTheme = localStorage.getItem("theme");
    console.log(currentTheme)
    if (currentTheme === "dark") {
        // get necessary elements
        let pars = document.getElementById("content");
        let link1 = document.getElementById("l1");
        let link2 = document.getElementById("l2");
        let toggle = document.getElementById("toggle");
        

        document.body.classList.remove("darkBody");
        pars.style.color = "black";
        link1.style.color = "black";
        link2.style.color = "black";
        toggle.src = "moon.svg";
        toggle.style.filter = "invert(0)";
        localStorage.setItem("theme", "light");
    } else {
        // get necessary elements
        let pars = document.getElementById("content");
        let link1 = document.getElementById("l1");
        let link2 = document.getElementById("l2");
        let toggle = document.getElementById("toggle");

        document.body.classList.add("darkBody");
        pars.style.color = "white";
        link1.style.color = "white";
        link2.style.color = "white";
        toggle.src = "sun.svg";
        toggle.style.filter = "invert(180)";
        localStorage.setItem("theme", "dark");
    }
});