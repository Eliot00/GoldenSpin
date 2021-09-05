document.getElementById("cavalry-spin").addEventListener("click", () => {
  browser.runtime.sendMessage({action: "setTimer"});
});

document.getElementById("bites-the-dust").addEventListener("click", () => {
  browser.runtime.sendMessage({action: "resetTimer"});
});