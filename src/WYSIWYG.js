$(document).ready(function () {
  PopUpHide();
  InitPanel();
});
var viewData = [];

var showArea = $("#EditorView");

showArea.RefreshView = (data) => {
  let w =  GetViewObjectWrapper(data)
  viewData.push(w);
  showArea.append(w);
  
}
showArea.keyup((e) => {
  showArea.RefreshView();
})

