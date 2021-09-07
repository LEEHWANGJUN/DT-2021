//Javascript
//최초 로드 시 iframe 높이값 비율에 맞게 세팅
var $videoIframe = document.getElementById('team_video');
var responsiveWidth = $videoIframe.offsetHeight / 0.5625;
$videoIframe.setAttribute('width', responsiveWidth);

//브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
window.addEventListener('resize', function(){
    responsiveWidth = $videoIframe.offsetHeight / 0.5625;
    $videoIframe.setAttribute('width', responsiveWidth);
});