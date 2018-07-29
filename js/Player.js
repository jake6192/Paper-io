let ALL_PLAYERS = [];

function Player(name, startCoords) {
  this.name = name;
  this.startCoords = startCoords;
  this.previousPosition = [];
  this.position = [(startCoords[0][0]+1), (startCoords[0][1]+1)];
  this.direction = ['N'];
  this.ownedCoords = [];
  this.stealingCoords = [];
  this.drawPlayer();
  ALL_PLAYERS.push(this);
  return this;
}


Player.prototype.drawPlayer = function() {
  var _C = this.startCoords;
  var ri = this.position[0], ci = this.position[1];
  setPlayerDynamics('rgba(30, 30, 225, 0.85)', 'rgba(20, 20, 255, 0.95)');
  if(this.startCoords != null) {
    for(var i = _C[0][0]; i <= _C[1][0]; i++) {
      for(var j = _C[0][1]; j <= _C[1][1]; j++) {
        var row = $('div.row[rowIndex="'+i+'"]');
        var cell = $(row).children('div.cell[columnIndex="'+j+'"]');
        var player = $('div.row[rowIndex="'+ri+'"] > div.cell[columnIndex="'+ci+'"]');
        $(cell).css(OWNED_CELL);
        $(player).css(PLAYER_CELL);
        this.ownedCoords.push([i, j]);
      }
    }
    this.startCoords = null;
  } else {
    var _PP = this.previousPosition;
    var previousPosition = $('div.row[rowIndex="'+_PP[0]+'"] > div.cell[columnIndex="'+_PP[1]+'"]');
    var newPosition = $('div.row[rowIndex="'+ri+'"] > div.cell[columnIndex="'+ci+'"]');
    $(previousPosition).css(OWNED_CELL);
    $(newPosition).css(PLAYER_CELL);
  }
}

Player.prototype.movePlayer = function(player) {
  var direction = player.direction;
  var currentPosition = player.position;
  var playerObject = getHTMLCell(currentPosition);
  var newCoords = [player.position[0], player.position[1]];
  switch(direction) {
    case "N": newCoords = [(newCoords[0]-1), newCoords[1]]; break;
    case "E": newCoords = [newCoords[0], (newCoords[1]+1)]; break;
    case "S": newCoords = [(newCoords[0]+1), newCoords[1]]; break;
    case "W": newCoords = [newCoords[0], (newCoords[1]-1)]; break;
  }
  player.previousPosition = player.position;
  player.position = newCoords;
  this.drawPlayer();
}
