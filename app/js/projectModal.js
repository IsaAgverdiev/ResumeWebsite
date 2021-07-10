const projectModalBtnClose = document.querySelector('.project-modal__btn');
const projectBody = document.querySelector('.project-modal__body');

function openModal() {
  projectModal.style.display = 'flex';
  disableScroll();
}
function closeModal() {
  projectModal.style.display = 'none';
  enableScroll();
}

if (projectModalBtnClose) {
  projectModalBtnClose.addEventListener('click', closeModal);
}

projectModal.addEventListener('click', (e) => {
  let target = e.target;
  if (target.matches('.project-modal')) {
    closeModal();
    enableScroll();
  }
});
