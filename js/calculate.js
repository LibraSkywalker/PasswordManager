$(document).ready(function(){
  $("button").click(function(){
    $.getJSON('js/data.json', function(data){
      $('p').append(data.sites[0].name);
	});
  });
});