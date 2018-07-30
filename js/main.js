const PLAYER_VELOCITY = 1;
let BOARD, _cellWidth_;
let player1, player1El;
$(document).ready(function() {
  BOARD = new Board(600, 600, 20);
  player1 = new Player('Jake', [[4, 13], [6, 15]]);
  player1El = getHTMLCell([player1.position[0], player1.position[1]]);
  DRAW = setInterval(drawFrame, 250);
});

$('*').keydown(function(event) {
  player1.changeDirection(event.which);
});

function drawFrame() {
  for(var i = 0, player = ALL_PLAYERS[i]; i < ALL_PLAYERS.length; i++) if(player.moving) player.movePlayer();
  player1El = getHTMLCell([player1.position[0], player1.position[1]]);
  $(player1El).html(player1.name);
}

function getHTMLCell(coords) {
  var row = $('div.row[rowIndex="'+coords[0]+'"]');
  var cell = $(row).children('div.cell[columnIndex="'+coords[1]+'"]');
  return $(cell);
}
