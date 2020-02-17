import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        if (e.target.tagName == "LI") {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }
  toggleTabs(e) {
    //removes current active classes
    this.tabs.forEach(tab => tab.classList.remove("active"));

    //add new active class to tab clicked
    e.target.classList.add("active");
  }
  toggleContent(e) {
    //remove current active classes from content
    this.container.querySelectorAll(".content").forEach(item => {
      item.classList.remove("active");
    });

    //add new active class to content
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export { Tabs as default };
