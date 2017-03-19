$.getJSON('js/data.json', function(data){
    $('p').append(data.sites[0].name);
});