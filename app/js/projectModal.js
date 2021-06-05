const projectModalBtnClose = document.querySelector(".project-modal__btn");

if (projectModalBtnClose) {
  projectModalBtnClose.addEventListener("click", closeModal);
}


function openModal() {
  projectModal.classList.remove("hide");
}
function closeModal() {
  projectModal.classList.add("hide");
}
