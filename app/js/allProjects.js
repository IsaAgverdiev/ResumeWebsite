const girdProjects = document.querySelector(".grid-container__projects");

if (girdProjects) {
  girdProjects.addEventListener("click", openModal);
}

function openModal(e) {
  let target = e.target.closest(".project");

  if (target.classList.contains("project")) {
    createModal();
  }
}

function createModal() {
  new WinBox("Modal Window", {
    // modal: true,
    background: "#1d1d1d",
    html: "",
    x: "center",
    y: "center",
    width: "50%",
    height: "80%",
  });
}
