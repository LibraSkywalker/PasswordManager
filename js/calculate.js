$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("js/data.json",function(result){
      $.each(result, function(i, field){
        $("p").append(field + " ");
      });
    });
  });
});