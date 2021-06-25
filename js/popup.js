$(function(){
  // 新标签打开网页
  $('#open_url_new_tab').click(() => {
  	chrome.tabs.create({url: 'https://lcl101.cn/'});
  });
  $('#open_url_new_tab_pi').click(() => {
  	chrome.tabs.create({url: 'http://10.147.17.110/pi-dashboard/'});
  });
});
