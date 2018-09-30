$(document).ready(function () {
  PopUpHide();
  InitPanel();
});
var editArea = $("#htmlEditArea");

var showArea = $("#EditorView");

showArea.RefreshView = (data = "") => {
  showArea.empty();
  editArea.val(editArea.val() + data);
  showArea.append(editArea.val());
}
editArea.keyup((e) => {
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

