const project1 = document.querySelector("#btn-project-1");
const project2 = document.querySelector("#btn-project-2");
const project3 = document.querySelector("#btn-project-3");

if (project1 || project2 || project3) {
  project1.addEventListener("click", function () {
    const title = projects.PureBank.title;
    const URL = projects.PureBank.URL;

    openModalWebsite(title, URL);
  });
  project2.addEventListener("click", function () {
    const title = projects.Shirogo.title;
    const URL = projects.Shirogo.URL;

    openModalWebsite(title, URL);
  });
  project3.addEventListener("click", function () {
    const title = projects.MyOffice.title;
    const URL = projects.MyOffice.URL;

    openModalWebsite(title, URL);
  });
}

function openModalWebsite(title, URL) {
  new WinBox({
    title: title,
    background: "#1d1d1d",
    url: URL,
    x: "center",
    y: "center",
    width: "80%",
    height: "80%",
  });
}
