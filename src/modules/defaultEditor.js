
var dropdown = $('<div class="dropdown-content"></div>');
var addStyle = $('<a href="#AddStyle">Add Style</a>');
var focusedItem;
function InitEditor() 
{
    dropdown.empty();
    addStyle.on('click', (e)=> AddStyle(e));
    dropdown.append(addStyle);
}

dropdown.on('mouseleave',(x)=>dropdown.toggle("show"));

function AddStyle(e) {
    debugger;
    PopUpShow(
        "Add style to '"+focusedItem[0].nodeName+"' object",
        "Background:<input id='cellBackground' type='text' value='"+focusedItem.css("background")+"'/></br>"+
        "Border:<input id='cellBorder' type='text' value='"+focusedItem.css("border")+"'/></br>"+
        "Font Family:<input id='cellFontStyle' type='text' value='"+focusedItem.css("font-family")+"'/></br>"+
        "Padding:<input id='cellPadding' type='text' value='"+focusedItem.css("padding")+"'/>",
        ()=>
        { 

            let bg = $("#cellBackground").val();
            let br = $("#cellBorder").val();
            let fs = $("#cellFontStyle").val();
            let pdd = $("#cellPadding").val();
            focusedItem.css({"background":bg,"border":br,"font-family":fs,"padding":pdd}); 
        }
    );
}

function AddMenuItem(item) {
    dropdown.append(item);
}
function ShowEditor(event)
{
    InitEditor();
    focusedItem = $(event.target);
    dropdown.css({left:event.pageX});
    dropdown.toggle("show");
}

