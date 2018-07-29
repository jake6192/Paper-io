function Board(width, height, cellsPR) {
  this.width = width;
  this.height = height;
  this.cellsPR = cellsPR;
  this.rows = [];
  for(var i = 0; i < this.cellsPR; i++) {
    var newRow = new Row(this, i);
    this.rows.push(newRow);
  }
  applyStyles(this);
  $('.board').css(BOARD_STYLE);
  $('.row').css(ROW_STYLE);
  $('.cell').css(CELL_STYLE);
  return this;
}

function Row(_Board, rowIndex) {
  this.Board = _Board;
  this.rowIndex = rowIndex;
  this.cells = [];
  this.drawRow(this.rowIndex);
  for(var i = 0; i < _Board.cellsPR; i++) {
    var cellWidth = _Board.width/_Board.cellsPR;
    var newCell = new Cell(this, i, cellWidth);
    this.cells.push(newCell);
  }
  return this;
}

function Cell(_Row, columnIndex, cellWidth) {
  this.Row = _Row;
  this.columnIndex = columnIndex;
  this.cellWidth = cellWidth;
  this.drawCell(_Row, columnIndex);
  return this;
}


/*****************/
/* Class Methods */
/*****************/


Row.prototype.drawRow = function(rowIndex) {
  let rowHTML;
  rowHTML  = '<div class="row" rowIndex="';
  rowHTML += rowIndex;
  rowHTML += '"></div>';
  $('.board').append(rowHTML);
}

Cell.prototype.drawCell = function(Row, columnIndex) {
  let rowHTML = $('div.row[rowIndex="'+Row.rowIndex+'"]');
  let columnHTML;
  columnHTML  = '<div class="cell" rowIndex="';
  columnHTML += Row.rowIndex;
  columnHTML += '" columnIndex="';
  columnHTML += columnIndex;
  columnHTML += '"></div>';
  $(rowHTML).append(columnHTML);
}
