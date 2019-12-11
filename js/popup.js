$(function(){
  // 新标签打开网页
  $('#open_url_new_tab').click(() => {
  	chrome.tabs.create({url: 'https://lcl101.cn/'});
  });
});
