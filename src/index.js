import Tooltip from "./ui-lib/tooltip";
import Dropdown from "./ui-lib/dropdown";
import Tabs from "./ui-lib/tabs";
import Snackbar from "./ui-lib/snackbar";

//create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me");
});
