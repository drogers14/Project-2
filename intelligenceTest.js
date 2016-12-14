function deepTwo() {
  var user2Entered = document.getElementById("user2").value;

  if (user2Entered.toLowerCase() == "laughter"||
  user2Entered.toLowerCase() ==  "laughing"){
      window.alert("Correct. Your intelligence isnt challenged at all")
    }
    else{

  window.alert("INCORRECT")
    }
  }

  function deep()
  {
    var userEntered = document.getElementById("user").value;
    userEntered = userEntered.toLowerCase();

    if (userEntered == "chewing" || userEntered == "biting" ||
     userEntered == "eating") {
        window.alert("Correct. Your intelligence isn't challenged at all.")
      }
      else{

    window.alert("INCORRECT")
      }
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";

}
