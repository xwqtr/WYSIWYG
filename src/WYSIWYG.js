$(document).ready(function () {
  PopUpHide();
  InitPanel();
});
var viewData = [];

var showArea = $("#EditorView");

showArea.RefreshView = (data) => {
  if (data != null) {
    let w = GetViewObjectWrapper(data)
    viewData.push(w);
  }

  showArea.empty();
  viewData.forEach(x => {
    debugger;
    x.click(x.clickAction);
    showArea.append(x);

  });

}
showArea.keyup((e) => {
  showArea.RefreshView();
})