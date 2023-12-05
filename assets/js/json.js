$().ready(function(){
    $.getJSON( "/assets/js/data.json", function( data ) {
    var arrayRandom = Math.floor(Math.random() * data.length);
    var item = data[arrayRandom];
    $("#text").html(item);
  });
});
