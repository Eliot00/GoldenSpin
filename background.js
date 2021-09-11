browser.alarms.onAlarm.addListener((alarmInfo) => {
  let title;
  let message;
  switch (alarmInfo.name) {
    case "cavalry-spin":
      title = "Star Platinum! The World!";
      message = "時停5分鐘，歐拉！";
      break;
    case "the-world":
      title = "新循環";
      message = "時間開始流動";
      break;
    default:
      break;
  }
  
  browser.notifications.create("notification", {
    "type": "basic",
    "iconUrl": browser.runtime.getURL("icons/border-48.png"),
    title,
    message,
  });
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case "setTimer":
      browser.alarms.create("cavalry-spin", {
        delayInMinutes: 25,
        periodInMinutes: 30,
      });
      browser.alarms.create("the-world", {
        delayInMinutes: 30,
        periodInMinutes: 30,
      });
      break;
    case "resetTimer":
      browser.alarms.clearAll();
      break;
    default:
      break;
  }
})