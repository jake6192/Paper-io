let BOARD_STYLE, ROW_STYLE, CELL_STYLE;
let PLAYER_CELL, OWNED_CELL, THEFT_CELL;

function applyStyles(BOARD) {
  BOARD_STYLE = {
    "display": "flex",
    "flex-direction": "column",
    "width": "min-content",
    "height": "min-content",
    "border": "10px inset #666"
  };
  ROW_STYLE = {
    "display": "flex",
    "flex-direction": "row",
    "width": "min-content",
    "height": "min-content"
  };
  CELL_STYLE = {
    "width":  (BOARD.width/BOARD.cellsPR+"px"),
    "height": (BOARD.height/BOARD.cellsPR+"px"),
    "background-color": "#FFF",
    "border": "1px groove #555"
  };
}

function setPlayerDynamics(BGColour, PColour) {
  PLAYER_CELL = {
    "background-color": PColour
  };

  OWNED_CELL = {
    "width": (((BOARD.width/BOARD.cellsPR)+2)+"px"),
    "height": (((BOARD.height/BOARD.cellsPR)+2)+"px"),
    "border": "none",
    "background-color": BGColour
  };

  THEFT_CELL = {};
}
