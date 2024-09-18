 var a;
  function detect() {
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            a = true ;
         alert("You are using a mobile browser") ;
         } else {
            a = false ;
      alert("You not are using a mobile browser") ;
            
  }
}

