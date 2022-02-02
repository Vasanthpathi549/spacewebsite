function add(){
    var a=$("#num1").val();
    var b=$("#num1").val()
    var c=parseFloat(a)+parseFloat(b);
    $("#add").click(function(){
        if(isNaN(a)||isNaN(b))
        {
            $("#total").val("NaN");
        }
        else{
            $("#total").val(res);
        }
    })
}