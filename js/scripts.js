$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
    event.preventDefault();
    let inputThing1 = $("input#thing1").val();
    let inputThing2 = $("input#thing2").val();
    let inputThing3 = $("input#thing3").val();
    let inputThing4 = $("input#thing4").val();

    let favoriteThings = [inputThing1, inputThing2, inputThing3, inputThing4]
    
    favoriteThings.pop();

    let music = ["funk", "classical", "art pop"]

    favoriteThings.push(music[0]);
    favoriteThings.push(music[1]);
    favoriteThings.push(music[2]);

    favoriteThings[0] = inputThing2
    favoriteThings[1] = inputThing1

    $(".ft1").text(favoriteThings[0]);
    $(".ft2").text(favoriteThings[1]);
    $(".ft3").text(favoriteThings[2]);
    $(".ft4").text(favoriteThings[3]);
    $(".ft5").text(favoriteThings[4]);
    $(".ft6").text(favoriteThings[5]);
  });
});
