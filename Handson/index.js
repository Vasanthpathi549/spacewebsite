function login() {
    var name = $("#username").val();
    var pwd = $("#password").val();
    $("button").on("click", function () {
      if (name == "admin" && pwd == "password") {
        doRedirect("home.html");
      } else {
        alert("You are not a valid user");
      }
    });
 };
 
 
 function doRedirect(href) {
 
  window.location = href;
  
 };
 