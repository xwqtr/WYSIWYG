var TableEditor = $('<button class="dropbtn">Edit Table</button>');
var TableEditorDropdown = $('<div class="dropdown-content"></div>');
var addColums = $('<a href="#AddColumn">Add Column</a>');
var addRow = $('<a href="#AddRow">Add Row</a>');

function InitTableEditor() {
    TableEditorDropdown.append(addColums);
    TableEditorDropdown.append(addRow);
    TableEditor.append(TableEditorDropdown);
}
TableEditor.on('click', (e) => {
    TableEditorDropdown.css({left:e.pageX});
    TableEditorDropdown.toggle("show");
})



addColums.on('click', (e) => {
    debugger;
    var $focused = $(':focus');
})
addRow.on('click', (e) => {

})