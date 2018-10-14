$(document).ready(function () {
  PopUpHide();
  InitPanel();
});
var viewData = [];

var showArea = $("#EditorView");

showArea.RefreshView = (data) => {
  debugger;
  let w =  GetViewObjectWrapper(data)
  viewData.push(w);

  viewData.forEach(x => {
    if(document.getElementById(x.Id)==null)
    {
      showArea.append(x);
    }
  });
  
}
showArea.keyup((e) => {
  showArea.RefreshView();
})

