let inform = document.getElementById(info)
  var a;
      var answer = document.getElementById("result"); 
  function detect() {
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            a = true ;
           info.textContent = "You are using a mobile browser."
         } else {
            a = false ;

           info.textContent = "You are not using a mobile browser."
  }
}
