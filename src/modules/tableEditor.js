var TableEditorDropdown = $('<div class="dropdown-content"></div>');
var addColums = $('<a href="#AddColumn">Add Column</a>');
var addRow = $('<a href="#AddRow">Add Row</a>');
var addStyle = $('<a href="#AddStyle">Add Style</a>');

var focusedTable;
var focusedCell;
function InitTableEditor() {

    TableEditorDropdown.append(addColums);
    TableEditorDropdown.append(addRow);
    TableEditorDropdown.append(addStyle);
}
function ShowTableEditor(event)
{ 
    debugger;
    focusedCell = $(event.target);
    focusedTable = $(event.currentTarget.children[0]);
    TableEditorDropdown.css({left:event.pageX});
    TableEditorDropdown.toggle("show");
}

TableEditorDropdown.mouseleave((x)=>{
    TableEditorDropdown.toggle("show");
});

addStyle.on('click', (e)=> {
    debugger;
    PopUpShow(
        "Add style to cell",
        "Background:<input id='cellBackground' type='text'/></br>"+
        "Border:<input id='cellBorder' type='text'/></br>"+
        "Font Style:<input id='cellFontStyle' type='text'/></br>"+
        "Padding:<input id='cellPadding' type='text'/>",
        ()=>
        { 
            debugger;
            let bg = $("#cellBackground").val();
            let br = $("#cellBorder").val();
            let fs = $("#cellFontStyle").val();
            let pdd = $("#cellPadding").val();

            focusedCell.css({"background":bg,"border":br,"font-style":fs,"padding":pdd}); 
        }
    );
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
    for(let i = 0 ; i < trs[0].cells.length;i++)
    {
        tds+='<td>new cell added</td>';
        
    }
    var tr = $('<tr></tr>');
    tr.append(tds);
    $(trs[trs.length-1]).after(tr);
})