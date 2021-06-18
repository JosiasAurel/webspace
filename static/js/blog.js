
document.getElementById("right").innerText = `Josias Aurel ${new Date().getFullYear()}`

// let currentTheme = localStorage.getItem("theme");

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    let currentTheme = localStorage.getItem("theme");
    console.log(currentTheme)
    if (currentTheme === "dark") {
        // get necessary elements
        let tags = document.getElementsByClassName("tag");
        console.log(tags)
        let toggle = document.getElementById("toggle");
        

        document.body.classList.remove("darkBody");
        toggle.src = `/static/img/moon.svg`;
        toggle.style.filter = "invert(0)";
        for (let t = 0; t < tags.length; t++) {
            tags[t].style.backgroundColor = "black";
            tags[t].style.color = "white";
        }
        /* tags.forEach(tag => {
            tag.style.backgroundColor = "black";
            tag.style.color = "white";
        }) */
        localStorage.setItem("theme", "light");
    } else {
        // get necessary elements
        let tags = document.getElementsByClassName("tag");
        let toggle = document.getElementById("toggle");

        document.body.classList.add("darkBody");
        toggle.src = `/static/img/sun.svg`;
        toggle.style.filter = "invert(180)";
        for (let t = 0; t < tags.length; t++) {
            tags[t].style.backgroundColor = "white";
            tags[t].style.color = "black";
        }
        /* tags.forEach(tag => {
            tag.style.backgroundColor = "white";
            tag.style.color = "black";
        }) */
        localStorage.setItem("theme", "dark");
    }
});