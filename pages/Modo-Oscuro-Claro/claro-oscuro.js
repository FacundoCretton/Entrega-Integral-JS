const header=document.querySelector("header")
const toggleThemeButton = document.getElementById("toggle-theme");
const bodyElement = document.querySelector("body");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");

toggleTheme = () => {
    bodyElement.classList.toggle("dark");
    
    if (bodyElement.classList.contains("dark")) {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
      header.classList.add("dark-mode");
    //   toggleHeaderBackground(".dark header.scrolled");
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
      header.classList.remove("dark-mode");
    //   toggleHeaderBackground("header.scrolled");
  
    }
}


const init =() => {
    toggleThemeButton.addEventListener('click', toggleTheme);
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      toggleTheme();
    }
}


init()