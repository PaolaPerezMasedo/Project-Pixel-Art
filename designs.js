$(document).ready(function() {


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
  let form = $("#sizePicker");
  form.submit(function(event) {
    event.preventDefault();
    makeGrid();
  });

  $("table").on("click", "td", function() {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });
});
