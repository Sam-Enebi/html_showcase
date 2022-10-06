let para1Displayed = false;
let para2Displayed = false;

document.getElementById("collapsible__item-1").addEventListener("click", () => {
  let para = document
    .getElementById("collapsible__item-1")
    .getElementsByTagName("p")[0];
  para.style.display = para1Displayed ? "none" : "flex";
  para.style.height = para1Displayed ? "0%" : "100%";
  para1Displayed = para1Displayed ? false : true;
});

document.getElementById("collapsible__item-2").addEventListener("click", () => {
  let para = document
    .getElementById("collapsible__item-2")
    .getElementsByTagName("p")[0];
  para.style.display = para2Displayed ? "none" : "flex";
  para.style.height = para2Displayed ? "0%" : "100%";
  para2Displayed = para2Displayed ? false : true;
});

// tabs

let tabs = [
  {
    name: "Calendar Sync",
    content:
      "Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here. Calendar Sync paragraph lies here.",
    id: "tab-1",
  },
  {
    name: "Customer Snapshots",
    content:
      "Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here. Customer Snapshots paragraph lies here.",
    id: "tab-2",
  },
  {
    name: "Salesforce Apps",
    content:
      "Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here. Salesforce Apps paragraph lies here.",
    id: "tab-3",
  },
  {
    name: "Log Calls to Salesforce",
    content:
      "Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here. Log Calls to Salesforce paragraph lies here.",
    id: "tab-4",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let html = ``;
  tabs.forEach((tab, index) => {
    html =
      index === 0
        ? `${html} <div class="tab tabActive" id=${tab.id}>${tab.name}</div>`
        : `${html} <div class="tab" id=${tab.id}>${tab.name}</div>`;
    document.getElementById("tabs").innerHTML = html;
  });

  for (let i = 0; i < tabs.length; i++) {
    document
      .getElementById(tabs[i].id)
      .addEventListener("click", () => selectTab(tabs[i]));
  }
});

const selectTab = selectedTab => {
  tabs.forEach(t =>
    document.getElementById(t.id)?.classList.remove("tabActive")
  );
  document.getElementById(selectedTab.id).classList.add("tabActive");
  document.getElementById(
    "tab__content"
  ).innerHTML = `<p>${selectedTab.content}<p/>`;
};
