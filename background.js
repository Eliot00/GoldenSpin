browser.alarms.onAlarm.addListener(() => {
  browser.notifications.create("notification", {
    "type": "basic",
    "iconUrl": browser.runtime.getURL("icons/border-48.png"),
    "title": "Star Platinum! The World!",
    "message": "時停5分鐘，歐拉！"
  });
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case "setTimer":
      browser.alarms.create("cavalry-spin", {
        delayInMinutes: 25,
        periodInMinutes: 25,
      });
      break;
    case "resetTimer":
      browser.alarms.clear("cavalry-spin");
      break;
    default:
      break;
  }
})