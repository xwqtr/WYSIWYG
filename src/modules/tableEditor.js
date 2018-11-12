var addColums = $('<a href="#AddColumn">Add Column</a>');
var addRow = $('<a href="#AddRow">Add Row</a>');
var addStyleToTable = $('<a href="#AddStyleToTable">Add Style To Table</a>');
var focusedTable;
function InitTableEditor() {
    addColums.on('click', (e) => {
        focusedTable.find('tr').each((i,x)=> {
            $(x).append('<td>new cell added</td>')
        });
    
        
    })
    addRow.on('click', (e) => {
        debugger;
        var trs = focusedTable.find('tr');
        
        var tds = "";
        for(let i = 0 ; i < trs[0].cells.length;i++)
        {
            tds+='<td>new cell added</td>';
            
        }
        var tr = $('<tr></tr>');
        tr.append(tds);
        $(trs[trs.length-1]).after(tr);
    })
    AddMenuItem(addRow);
    AddMenuItem(addColums);
    
}
function ShowTableEditor(event)
{
    ShowEditor(event);
    InitTableEditor();
    focusedTable = $(event.currentTarget.children[0]);
    
}



