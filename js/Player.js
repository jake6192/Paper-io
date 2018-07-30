let ALL_PLAYERS = [];

function Player(name, startCoords) {
  this.name = name;
  this.startCoords = startCoords;
  this.previousPosition = [];
  this.position = [(startCoords[0][0]+1), (startCoords[0][1]+1)];
  this.direction = ['N'];
  this.ownedCoords = [];
  this.stealingCoords = [];
  this.colour = 'rgba(20, 20, 255, 0.95)';
  this.ownedColour = 'rgba(30, 30, 225, 0.85)';
  this.drawPlayer();
  ALL_PLAYERS.push(this);
  return this;
}

Player.prototype.drawPlayer = function() {
  var _C = this.startCoords;
  var ri = this.position[0], ci = this.position[1];
  if(this.startCoords != null) {
    for(var i = _C[0][0]; i <= _C[1][0]; i++) {
      for(var j = _C[0][1]; j <= _C[1][1]; j++) {
        var cell = getHTMLCell([i, j]);
        var player = getHTMLCell([ri, ci]);
        $(cell).css({"background-color": this.ownedColour});
        $(player).css({"background-color": this.colour});
        this.ownedCoords.push([i, j]);
      }
    }
    this.startCoords = null;
  }
};

Player.prototype.movePlayer = function() {
  var direction = this.direction;
  var newCoords = this.position;
  var currentPosition = this.position;
  var playerObject = getHTMLCell(currentPosition);
  this.previousPosition = this.position;
  if(direction == 'N') newCoords = [(newCoords[0]-1), (newCoords[1]  )];
  if(direction == 'E') newCoords = [(newCoords[0]  ), (newCoords[1]+1)];
  if(direction == 'S') newCoords = [(newCoords[0]+1), (newCoords[1]  )];
  if(direction == 'W') newCoords = [(newCoords[0]  ), (newCoords[1]-1)];
  this.position = newCoords;
  var previousPosition = getHTMLCell([this.previousPosition[0], this.previousPosition[1]]);
  var newPosition = getHTMLCell([this.position[0], this.position[1]]);
  $(previousPosition).addClass('ownedCell').css(
    {
      "width": (((BOARD.width/BOARD.cellsPR)+2)+"px"),
      "height": (((BOARD.height/BOARD.cellsPR)+2)+"px"),
      "background-color": this.ownedColour
    }
  ).html('');
  $(newPosition).css({"background-color": this.colour});
};

Player.prototype.changeDirection = function(keyCode) {
  switch(keyCode) {
    case 87: this.direction = 'N'; break;
    case 68: this.direction = 'E'; break;
    case 83: this.direction = 'S'; break;
    case 65: this.direction = 'W'; break;
  }
}
