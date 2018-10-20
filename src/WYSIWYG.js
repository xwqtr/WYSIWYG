$(document).ready(function () {
  PopUpHide();
  InitPanel();
});
var viewData = [];

var showArea = $("#EditorView");
showArea.on('keyup',(e)=> setCaretPosition(e,e.currentTarget.innerText.length));
showArea.RefreshView = (data) => {
  if (data != null) {
    let w = GetViewObjectWrapper(data)
    viewData.push(w);
  }

  showArea.empty();
  viewData.forEach(x => {
    x.click(x.clickAction);
    x.contextmenu(x.contextMenuAction);
    showArea.append(x);

  });

}
showArea.keyup((e) => {
  showArea.RefreshView();
})

function setCaretPosition(elem, caretPos) {
  

  if(elem != null) {
      if(elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
      }
      else {
          if(elem.selectionStart) {
              elem.focus();
              elem.setSelectionRange(caretPos, caretPos);
          }
          else
              elem.focus();
      }
  }
}