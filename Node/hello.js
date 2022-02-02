function add() {
    $(document).ready(function(){
    var a=parseFloat($("#num1").val());
    var b=parseFloat($("#num2").val());  
    var res=a+b;
    $("#add").click(function(){
      if(isNaN(a)||isNaN(b))
      {
          $("#total").val('NaN');
      }
      else{
  
        $("#total").val(res);
      }
      
  
    });
  })
    
  };// function add() {
//     var a=parseFloat($("#num1").val());
//     var b=parseFloat($("#num2").val());  
//     var res=a+b;
//     $("#add").on("click",function(){
//       if(isNaN(a)||isNaN(b))
//       {
//           $("#total").val('NaN');
//       }
//       else{
  
//         $("#total").val(res);
//       }
      
  
//     });
//   };