var InsertUrlBtn = $("<button id='InsertUrlBtn'>Insert URL</button>");
var InsertImageBtn = $('<button id="InsertImageBtn">Insert Image</button>');
var InsertButtonBtn = $('<button id="InsertButtonBtn">Insert Button</button>');
var InsertListBtn = $('<button id="InsertListBtn">Insert List </button>');
var InsertTextBtn = $('<button id="InsertTextBtn">Insert Text</button>');
var InsertTableBtn = $('<button id="InsertTextBtn">Insert Table</button>');
var deleteMode = $('<input type="checkbox" id="deleteMode">Delete mode</input>');
var openWebPAge = $('<button id="OpenWebPage">Open Web Page</button>');
var saveAsZip = $('<button id="SaveAsZip">Save as zip</button>');

var panel = $("#Panel");

function InitPanel() {
    panel.append(InsertTextBtn);
    panel.append(InsertUrlBtn);
    panel.append(InsertImageBtn);
    panel.append(InsertButtonBtn);
    panel.append(InsertListBtn);
    panel.append(InsertTableBtn);
    panel.append(openWebPAge);
    panel.append(saveAsZip);


    panel.append(deleteMode);
    InitTableEditor();

}

function GetPage() {
    let page = "";
    viewData.forEach(x => {
        page += $(x)[0].innerHTML;
    });
    return page;

}

saveAsZip.on("click", (e) => {
    var page = GetPage();
    const url = "/download-zip-file";
    debugger;
    var params = {
        pageHtml: page
    };
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
        if (this.status === 200) {
            var filename = "";
            var disposition = xhr.getResponseHeader('Content-Disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
                var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                var matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
            }
            var type = xhr.getResponseHeader('Content-Type');

            var blob = typeof File === 'function' ?
                new File([this.response], filename, {
                    type: type
                }) :
                new Blob([this.response], {
                    type: type
                });
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
                // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                window.navigator.msSaveBlob(blob, filename);
            } else {
                var URL = window.URL || window.webkitURL;
                var downloadUrl = URL.createObjectURL(blob);

                if (filename) {
                    // use HTML5 a[download] attribute to specify filename
                    var a = document.createElement("a");
                    // safari doesn't support this yet
                    if (typeof a.download === 'undefined') {
                        window.location = downloadUrl;
                    } else {
                        a.href = downloadUrl;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                    }
                } else {
                    window.location = downloadUrl;
                }

                setTimeout(function () {
                    URL.revokeObjectURL(downloadUrl);
                }, 100); // cleanup
            }
        }
    };
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send($.param(params));

})

openWebPAge.on("click", (e) => {
    var w = window.open();

    w.document.write(GetPage());
})
InsertTableBtn.on('click', (e) => {

    var table = "<table><tr><td>CellValue</td><td>CellValue</td></tr><tr><td>CellValue</td><td>CellValue</td></tr></table>";
    showArea.RefreshView(table);

})

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
        let x = "<p>" + $("#enterText").val() + "</p>";
        showArea.RefreshView(x);
        PopUpHide();
    });
})