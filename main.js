$(document).ready(()=>{
    $("#myinput").on("keyup", function(){
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
