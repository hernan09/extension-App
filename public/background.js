let ARCID;
let GetArcID;
let GetUrl;
let texto;

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0].url + 'ESta es la URL');
  texto = tabs[0].url;
});
