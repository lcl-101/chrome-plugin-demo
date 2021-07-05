$(function(){
  // 新标签打开网页
  $('#open_url_new_tab').click(() => {
  	chrome.tabs.create({url: 'https://lcl101.cn/'});
  });
  $('#open_url_new_tab_pi').click(() => {
  	chrome.tabs.create({url: 'http://10.147.17.201/pi-dashboard/'});
  });
  $('#open_url_new_tab_partainer').click(() => {
  	chrome.tabs.create({url: 'http://10.147.17.201:9000/#/home'});
  });
  $('#open_url_new_tab_explorer').click(() => {
  	chrome.tabs.create({url: 'http://10.147.17.201:5210/index.php?explorer'});
  });
});
