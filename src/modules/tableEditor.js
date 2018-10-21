var TableEditorDropdown = $('<div class="dropdown-content"></div>');
var addColums = $('<a href="#AddColumn">Add Column</a>');
var addRow = $('<a href="#AddRow">Add Row</a>');

var focusedTable;

function InitTableEditor() {

    TableEditorDropdown.append(addColums);
    TableEditorDropdown.append(addRow);
}
function ShowTableEditor(event)
{   
    focusedTable = $(event.currentTarget.children[0]);
    TableEditorDropdown.css({left:event.pageX});
    TableEditorDropdown.toggle("show");
}

TableEditorDropdown.mouseleave((x)=>{
    TableEditorDropdown.toggle("show");
});

addColums.on('click', (e) => {
    focusedTable.find('tr').each((i,x)=> {
        $(x).append('<td>new cell added</td>')
    });

    
})
addRow.on('click', (e) => {
    debugger;
    var trs = focusedTable.find('tr');
    
    var tds = "";
    for(let i = 0 ; i < trs.length;i++)
    {
        tds+='<td>new cell added</td>';
        
    }
    var tr = $('<tr></tr>');
    tr.append(tds);
    $(trs[trs.length-1]).after(tr);
})