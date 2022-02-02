function login() {
  var name = $("#username").val();
  var pwd = $("#password").val();
  $("button").on("click", function () {
    if (name == "admin" && pwd == "password") {
      alert("You are a valid user");
    } else {
      alert("You are not a valid user");
    }
  });
}
function validate(){
    $("#html").on("click", function () {
        $("p").append("<b>new content at end</b>. ");
      });
    
}
