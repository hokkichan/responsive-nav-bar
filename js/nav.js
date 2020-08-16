window.onscroll = function() {responsiveNav()};

function responsiveNav() {
   const distanceFromTop = document.body.scrollTop || document.documentElement.scrollTop;
   const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const progressBarWidth = (distanceFromTop / pageHeight) * 100;
   document.getElementById('progressBar').style.width = progressBarWidth + '%';
 }

