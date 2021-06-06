const girdProjects = document.querySelector(".grid-container__projects");
const projectModal = document.querySelector(".project-modal");
const projectModalInner = document.querySelector(".project-modal__inner");

if (girdProjects) {
  girdProjects.addEventListener("click", getModal);
}

function getModal(e) {
  let target = e.target.closest(".project");
  let targetName = target.getAttribute("data-name");

  switch (targetName) {
    case "PureBank":
      createModal("PureBank");
      openModal();
      break;
    case "Shirogo":
      createModal("Shirogo");
      openModal();
      break;
    case "MyOffice":
      createModal("MyOffice");
      openModal();
      break;
    case "ResumeWebsite":
      createModal("ResumeWebsite");
      openModal();
      break;
    case "Desire":
      createModal("Desire");
      openModal();
      break;
    case "KoreaCrem":
      createModal("KoreaCrem");
      openModal();
      break;
  }
}

function createModal(WebsiteName) {
  let workList = projects[WebsiteName].work;
  let toolsList = projects[WebsiteName].tools;

  let templates = `
      <h1 class="project-modal__title">${projects[WebsiteName].title}</h1>
      <span class="project-modal__status">статус проекта: ${projects[WebsiteName].status}</span>
      <div class="project-modal__links">
        <a class="project-modal__link project-modal__website" href=${projects[WebsiteName].URL} target="_blank">Сайт</a>
        <a class="project-modal__link project-modal__code" href=${projects[WebsiteName].repositories} target="_blank">Код</a>
      </div>
      <p class="project-modal__discr">${projects[WebsiteName].discr}</p>
      <div class="project-modal__task">
        <h2 class="project-modal__task-title">Задача:</h2>
        <p class="project-modal__task-text">${projects[WebsiteName].task}</p>
      </div>
      <div class="project-modal__work">
        <h2 class="project-modal__work-title">Что было сделано:</h2>
        ${`<ul class="project-modal__work-list">${workList.map((i) => `<li class="project-modal__work-item">${i}</li>`).join("")}</ul>`}
      </div>
      <div class="project-modal__tools">
        <h2 class="project-modal__tools-title">Инструменты и стек технологий</h2>
        ${`<ul class="project-modal__tools-list">${toolsList.map((i) => `<li class="project-modal__tools-item">${i}</li>`).join("")}</ul>`}
      </div>
      `;

  projectModalInner.innerHTML = templates;
}
