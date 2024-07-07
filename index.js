console.log("hi from index.js");

const modalOpenButton = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
modalOpenButton.addEventListener("click", () => {
  console.log("hello from openButton");
  modal.showModal();
});

const modalCloseButton = document.querySelector(".modal-content .button");
modalCloseButton.addEventListener("click", () => {
  console.log("hello from close button");
  modal.setAttribute("closing", "");
  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
});

const menuButton = document.querySelector(".dropbtn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const menuItems = document.querySelectorAll(".menu-item");
menuButton.addEventListener("click", () => {
  console.log("hello from menuButton");
  dropdownMenu.style.display = "block";
  dropdownMenu.classList.add("open");
});

document.addEventListener("click", (event) => {
  if (event.target !== menuButton) {
    dropdownMenu.style.display = "none";
    dropdownMenu.classList.remove("open");
  }
});

// function listener(event) {
//   switch (event.type) {
//     case "animationstart":
//       console.log("hello");
//       break;
//     case "animationend":
//       modal.classList.remove("closing");
//       modal.close();
//       console.log("bye");
//       break;
//     case "animationiteration":
//       console.log("wheeee");
//       break;
//   }
// switch (event.type) {
//   case "animationstart":
//     console.log("animationstart");
//     break;
//   case "animationend":
//     console.log("animationend");
//     modal.removeAttribute("closing");
//     modal.close();
//     break;
//   case "animationiteration":
//     console.log("animationiteration");
//     break;
// }
// }
