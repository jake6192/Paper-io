function Board(width, height, cellsPerRow) {
  _cellWidth_ = (width/cellsPerRow);
  this.width = width;
  this.height = height;
  this.cellsPR = cellsPerRow;
  this.rows = [];
  for(var i = 0; i < this.cellsPR; i++) {
    var newRow = new Row(this, i);
    this.rows.push(newRow);
  }
  $('.cell').css({
    "width": (_cellWidth_+"px"),
    "height": (_cellWidth_+"px")
  });
  return this;
}

function Row(_Board, rowIndex) {
  this.Board = _Board;
  this.rowIndex = rowIndex;
  this.cells = [];
  this.drawRow(this.rowIndex);
  for(var i = 0; i < _Board.cellsPR; i++) {
    var newCell = new Cell(this, i, _cellWidth_);
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
  columnHTML  = '<div class="cell" tabindex="1" rowIndex="';
  columnHTML += Row.rowIndex;
  columnHTML += '" columnIndex="';
  columnHTML += columnIndex;
  columnHTML += '"></div>';
  $(rowHTML).append(columnHTML);
}
