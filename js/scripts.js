


$(function() {
  $("form#favorite-things").submit(function(event){
    event.preventDefault();

    var favoriteThings = [$("input#favorite-food").val(), $("input#favorite-tv").val(), $("input#favorite-restaurant").val(), $("input#favorite-book").val()];
    var certainThings = [favoriteThings[1], favoriteThings[0], favoriteThings[2]];

    debugger;

    var pushThings = function(array1, array2) {

      array1.forEach(function(item) {
        array2.push(item);
      });

      array2.forEach(function(item){
        $(".output ul").append("<li>" + item + "</li>");
      });
    }
    pushThings(favoriteThings, certainThings);
    alert(certainThings);
  });
});
