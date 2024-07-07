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
  // modal.classList.add("closing");
  // modal.addEventListener("animationstart", listener, false);
  // modal.addEventListener("animationend", listener, { once: true });
  // modal.addEventListener("animationiteration", listener, false);

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
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
