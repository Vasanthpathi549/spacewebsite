function validate(){
    var name=$("#username").val();
    var pswd=$("#password").val();
    $("#submit").on("click",function(){
        console.log("Clicked");
        if(name=="vasanth" && pswd=="Vasanth1P@")
        {
            reDirect("home.html");
        }
        else{
            document.getElementById("hidden_para").innerText="Please Enter Valid details";
        }
    });
    
} 

function reDirect(href)
{
    window.location=href;
}