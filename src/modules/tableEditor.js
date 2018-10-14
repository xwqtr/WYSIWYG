var TableEditor = $('<button class="dropbtn">Edit Table</button>');
var TableEditorDropdown = $('<div class="dropdown-content"></div>');
var addTable = $('<a href="#AddTable">Add Table</a>');
var addColums = $('<a href="#AddColumn">Add Column</a>');
var addRow = $('<a href="#AddRow">Add Row</a>');

function InitTableEditor() {
    TableEditorDropdown.append(addTable);
    TableEditorDropdown.append(addColums);
    TableEditorDropdown.append(addRow);
    TableEditor.append(TableEditorDropdown);
}
TableEditor.on('click', (e) => {
    TableEditorDropdown.css({left:e.pageX});
    TableEditorDropdown.toggle("show");
})


addTable.on('click', (e) => {
 
    // var table = "<table style='border: 1px solid black;'><tr><td>CellValue</td></tr></table>";
    // showArea.RefreshView(table);

})
addColums.on('click', (e) => {
    
})
addRow.on('click', (e) => {

})