const girdProjects = document.querySelector(".grid-container__projects");
const projectModal = document.querySelector(".project-modal");
const projectModalInner = document.querySelector(".project-modal__inner");

if (girdProjects) {
  girdProjects.addEventListener("click", getModal);
}

function getModal(e) {
  let target = e.target.closest(".project");
  let targetName = target.getAttribute("data-name");

  if (targetName == "PureBank") {
    openModal();
    createModal();
  }

}

function createModal(targetName) {
  
  let templates = `
      <h1 class="project-modal__title">${projects.targetName.title}</h1>
      <div class="project-modal__links">
        <a class="project-modal__link project-modal__website" href=${projects.PureBank.URL} target="_blank">Сайт</a>
        <a class="project-modal__link project-modal__code" href=${projects.PureBank.repositories} target="_blank">Код</a>
      </div>
      <p class="project-modal__discr">${projects.PureBank.discr}</p>
      <div class="project-modal__task">
        <h2 class="project-modal__task-title">Задача:</h2>
        <p class="project-modal__task-text">${projects.PureBank.task}</p>
      </div>
      <div class="project-modal__work">
        <h2 class="project-modal__work-title">Что было сделано:</h2>
        <ul class="project-modal__work-list">
          <li class="project-modal__work-item">Разработан дизайн макет</li>
          <li class="project-modal__work-item">Выполнена семантическая, адаптивная кросбраузерная верстка</li>
          <li class="project-modal__work-item">Написан калькулятор ипотеки</li>
          <li class="project-modal__work-item">Написан калькулятор кредита</li>
          <li class="project-modal__work-item">Написан калькулятор вкдала</li>
          <li class="project-modal__work-item">Работа с API добавление на сайт курса валют</li>
          <li class="project-modal__work-item">Форма оформления карты</li>
        </ul>
      </div>
      <div class="project-modal__tools">
        <h2 class="project-modal__tools-title">Инструменты и стек технологий</h2>
        <ul class="project-modal__tools-list">
          <li class="project-modal__tools-item">Htmggl</li>
          <li class="project-modal__tools-item">Scss</li>
          <li class="project-modal__tools-item">Gulp</li>
          <li class="project-modal__tools-item">JavaScript</li>
        </ul>
      </div>
      `;

  projectModalInner.innerHTML = templates;
}
