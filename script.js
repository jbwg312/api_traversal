$(document).ready(function(){
  $('#btn').click(function(){
    $('#center_column').empty();
    var input = $('#input').val();

  $.getJSON({
    method: "GET",
    url: "http://www.omdbapi.com/?s=" + input,
    success: function(result){
      var arr = result.Search;
      $(arr).each(function(i, val){
        if(val.Poster === "N/A"){
          $("#center_column").append(`<h3>${val.Title}</h3><div><img class="no movie_poster" src="${"mockups/images/no_image.png"}"/></div>`);
        } else {
        $("#center_column").append(`<h3>${val.Title}</h3><div><img class="movie_poster" src="${val.Poster}"/></div>`);
          }
        })
      }
    })
  })
})
