function doing(){
        $("#fresco").on("click",function(){
            $("body").replaceWith
            ("<body><h1>Event Generated</h1></body>");
        })
}

$(document).ready(function(){
    $("p").on("click", function(){
        console.log("using on() with single event handler");
      });

    $("div").on(
       { click:function(){
            console.log("Clicked");
        },
        mouseover:function(){
            console.log("Hover");
        }
    }
    )
});

