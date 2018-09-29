$(document).ready(function () {
  PopUpHide();
});
var editArea = $("#htmlEditArea");
var showArea = $("#EditorView");
var InsertUrlBtn = $("#InsertUrlBtn");
var InsertImageBtn = $("#InsertImageBtn");
var InsertButtonBtn = $("#InsertButtonBtn");
var InsertListBtn = $("#InsertListBtn");

var popup = $("#Popup");
var popupText = $("#PopupText")
var popupSave = $("#PopupSaveBtn");
var popupCancelBtn = $("#PopupCancelBtn");
var popupBody = $("#PopupBody");
popupCancelBtn.on("click", (e) => {
  PopUpHide();
})

function PopUpShow(description, body, saveAction) {
  popupBody.empty();
  popupBody.append(body);
  popupText.empty();
  popupText.append(description);
  popupSaveAction = saveAction;
  popup.show();
}

function PopUpHide() {
  popup.hide();
}
var popupSaveAction = null;
popupSave.on('click', () => popupSaveAction());





showArea.RefreshView = (data = "") => {
  showArea.empty();
  editArea.val(editArea.val() + data);
  showArea.append(editArea.val());
}
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
          var imagetag = "<img src='" + e.target.result + "'/>";
          event.currentTarget.value += imagetag;

        };
      }
      reader.readAsDataURL(blob);

    }
  }

})

InsertListBtn.on('click',(e)=> {
  var pBody = "<textarea id='btnListText'>Split items using enter</textarea>";
  
  PopUpShow("Add List",pBody,()=>{ 
    var collection = $("#btnListText").val().split("\n");
    let x = "<ul>";
    for(let text in collection)
    {
      x+='<li>'+text+'</li>';
    }
    x+="</ul>"
    showArea.RefreshView(x);
    PopUpHide();
  });
 
})

InsertButtonBtn.on('click',(e)=> {
  let pBody = "<textarea id='btnText'>Enter Btn Text</textarea>";
  pBody+="<textarea id='btnAction'>Enter Btn Action</textarea>";
  PopUpShow("Add Button",pBody,()=>{ 
    let x = "<button onclick='"+$('#btnAction').val()+"'>"+$('#btnText').val() +"</button>";
    showArea.RefreshView(x);
    PopUpHide();
  });
})

InsertUrlBtn.on('click', (e) => {
  let pBody = "<textarea id='enterUrl'>Enter Uri</textarea>";
  pBody += "<textarea id='enterText'>Enter Uri text</textarea>"
  PopUpShow("Add Url", pBody, () => {
    let x = "<a href='" + $("#enterUrl").val() + "'>" + $("#enterText").val() + "</a>";
    showArea.RefreshView(x);
    PopUpHide();
  });
})
InsertImageBtn.on('click', (e) => {
  let pBody = "<textarea id='enterUrl'>Enter Uri</textarea>";
  PopUpShow("Add Image", pBody, () => {
    let x = "<img src='" + $("#enterUrl").val() + "'></img>";
    showArea.RefreshView(x);
    PopUpHide();
  });
})