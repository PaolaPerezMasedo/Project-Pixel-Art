$(document).ready(function(){

/*
*Function to make the grid that will hold the colors
*/

  function makeGrid() {
    let height = $("#inputHeight").val();
    let width = $("#inputWidth").val();
    let table = $("#pixelCanvas");
    table.children().remove();

    for (let n = 0; n < height; n++) {
      table.append("<tr></tr>");
      for (let m = 0; m < width; m++) {
        $("tr")
          .last()
          .append("<td></td>");
      }
    }
  }

//Submit button
  let form = $("#sizePicker");
  form.submit(function(event) {
    event.preventDefault();
    makeGrid();
  });

/*
*Function to print the colors
*/

  $("table").on("click", "td", function() {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });

$(".btnHow").click(function(){
  $("div.instructions").toggleClass("show_instructions");
});


$(".instructions_close").click(function(){
  $("div.instructions").css("display", "none");
});


});
