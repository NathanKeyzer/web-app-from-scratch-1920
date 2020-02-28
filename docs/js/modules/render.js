const renderSettings = {
  element: document.querySelector("main"),
  user: document.querySelector("h1"),
  nav: document.querySelectorAll("header a")
};

const render = {
  loadingState: () => {
      render.template(`<div class="spinner">
      <div class="double-bounce1"></div>
         <div class="double-bounce2"></div>
           </div>`)
  },
  template: template => {
    const templateEl = renderSettings.element
    while (templateEl.firstChild) templateEl.removeChild(templateEl.firstChild)
    renderSettings.element.innerHTML += template;
  }
};

export default render;
