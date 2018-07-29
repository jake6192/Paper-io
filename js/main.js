const PLAYER_VELOCITY = 1;
let BOARD, player1, player1El;
$(document).ready(function() {
  BOARD = new Board(600, 600, 20);
  player1 = new Player('Jake', [[4, 13], [6, 15]]);
  player1El = $('div.row[rowIndex="'+player1.position[0]+'"] > div.cell[columnIndex="'+player1.position[1]+'"]');
  DRAW = setInterval(drawFrame, 250);
});

$('*').keydown(function(event) {
  player1.changeDirection(event.which);
});

function drawFrame() {
  for(var i = 0; i < ALL_PLAYERS.length; i++) ALL_PLAYERS[i].movePlayer();
  player1El = $('div.row[rowIndex="'+player1.position[0]+'"] > div.cell[columnIndex="'+player1.position[1]+'"]');
}

function getHTMLCell(coords) {
  var row = $('div.row[rowIndex="'+coords[0]+'"]');
  var cell = $(row).children('div.cell[columnIndex="'+coords[1]+'"]');
  return $(cell);
}
