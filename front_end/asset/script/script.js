const menu = document.querySelector("#menu");
const ul = document.querySelector("#root_list");
menu.addEventListener("click", function () {
  ul.classList.toggle("show");
});

// reset input field
function inputFieldreset() {
  if (confirm("Do you wanto clear input fields!")) {
    return true;
  } else {
    return false;
  }
}

// light and dark mode
function darkMode() {
  const wasDarkMode = localStorage.getItem("darkmode") === "true";
  console.log(wasDarkMode);
  localStorage.setItem("darkmode", !wasDarkMode);
  const element = document.body;

  console.log(element);
  element.classList.toggle("dark_mode", wasDarkMode);
  let modeIcon = document.querySelector(".mode_icon");
  modeIcon.classList.toggle("ion-ios-sunny");

  // const paragraph = document.querySelectorAll("p");

  // paragraph.forEach((para) => {
  //   para.style.color = "#ffffff";
  // });
}

function load() {
  document.body.classList.toggle(
    "dark_mode",
    localStorage.getItem("darkmode") === "false"
  );
}
