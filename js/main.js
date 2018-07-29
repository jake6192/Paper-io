const PLAYER_VELOCITY = 1;
let BOARD;
$(document).ready(function() {
  $('.board').focus();

  BOARD = new Board(600, 600, 20);
  let player1 = new Player('Jake', [[4, 13], [6, 15]]);

  DRAW = setInterval(drawFrame, 1000);
});

function drawFrame() {
  for(var i = 0; i < ALL_PLAYERS.length; i++) ALL_PLAYERS[i].movePlayer();
}

function getHTMLCell(coords) {
  var row = $('div.row[rowIndex="'+coords[0]+'"]');
  var cell = $(row).children('div.cell[columnIndex="'+coords[1]+'"]');
  return $(cell);
}
