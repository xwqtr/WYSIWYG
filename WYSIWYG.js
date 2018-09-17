$(document).ready(function(){
  PopUpHide();
});
var editArea = $("#htmlEditArea");
var showArea = $("#EditorView");
var InsertUrlBtn = $("#InsertUrlBtn");
var InsertImageBtn= $("#InsertImageBtn");
var popup = $("#Popup");
var popupText = $("#PopupText")
var popupSave =$("#PopupSaveBtn");
var popupCancelBtn = $("#PopupCancelBtn");
var popupEdit =$("#PopupEdit");


popupCancelBtn.on("click",(e)=>{
  PopUpHide();
})
showArea.RefreshView = (data="") => {
  debugger;
  showArea.empty();
  editArea.val(editArea.val()+data);
  showArea.append(editArea.val());
  
  
}

InsertUrlBtn.on('click',(e)=> {
  PopUpShow("Add Url",()=>{
    debugger;
    let x = "<a href='"+ popupEdit.val()+"'>"+popupEdit.val()+"</a>";
    
    showArea.RefreshView(x);
    PopUpHide(); 
  });
})
InsertImageBtn.on('click',(e)=> {
  PopUpShow("Add Image",()=>{
    debugger;
    let x = "<img src='"+ popupEdit.val()+"'></img>";
    showArea.RefreshView(x);
    
    PopUpHide(); 
  });
})
function PopUpShow(description,saveAction) {
  popup.show();
  debugger;
  popupText.empty();
  popupText.append(description);
  popupSaveAction = saveAction;
}
function PopUpHide() {
  popup.hide();
}
var popupSaveAction =null;
popupSave.on('click',()=> popupSaveAction());

editArea.keyup((e) => {
  debugger;
  showArea.RefreshView();
})
editArea.on('paste', (event) => {
  var items = (event.clipboardData || event.originalEvent.clipboardData).items;
  for (index in items) {
    var item = items[index];
    if (item.kind === 'file') {
      var blob = item.getAsFile();
      var reader = new FileReader();
      if (item.type.includes('image')) {
        reader.onload = (e) => {
          itemsCnt++;
          var imagetag = "<img src='"+e.target.result+"'/>";
          event.currentTarget.value += imagetag;

        };
      }
      reader.readAsDataURL(blob);

    }
  }

})
