var InsertUrlBtn = $("<button id='InsertUrlBtn'>Insert URL</button>");
var InsertImageBtn = $('<button id="InsertImageBtn">Insert Image</button>');
var InsertButtonBtn = $('<button id="InsertButtonBtn">Insert Button</button>');
var InsertListBtn = $('<button id="InsertListBtn">Insert List Button</button>');
var InsertTextBtn = $('<button id="InsertTextBtn">Insert Text Button</button>');
var deleteMode = $('<input type="checkbox" id="deleteMode">Delete mode</input>');


    
var panel = $("#Panel");
function InitPanel() {
    panel.append(InsertTextBtn);
    panel.append(InsertUrlBtn);
    panel.append(InsertImageBtn);
    panel.append(InsertButtonBtn);
    panel.append(InsertListBtn);
    panel.append(TableEditor);
    panel.append(deleteMode);
    InitTableEditor();

}



InsertListBtn.on('click', (e) => {
    var pBody = "<textarea id='btnListText'>Split items using enter</textarea>";

    PopUpShow("Add List", pBody, () => {
        var collection = $("#btnListText").val().split("\n");
        
        let x = "<ul>";
        for (let id in collection) {
            x += '<li>' + collection[id] + '</li>';
        }
        x += "</ul>"
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
InsertButtonBtn.on('click', (e) => {
    let pBody = "<textarea id='btnText'>Enter Btn Text</textarea>";
    pBody += "<textarea id='btnAction'>Enter Btn Action</textarea>";
    PopUpShow("Add Button", pBody, () => {
        let x = "<button onclick='" + $('#btnAction').val() + "'>" + $('#btnText').val() + "</button>";
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

InsertTextBtn.on('click', (e) => {
    let pBody = "<textarea id='enterText'>Enter Text</textarea>";
    PopUpShow("Add Text", pBody, () => {
        let x = "<p>"+$("#enterText").val()+"</p>";
        showArea.RefreshView(x);
        PopUpHide();
    });
})