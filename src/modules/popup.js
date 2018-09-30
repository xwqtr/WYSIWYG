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


