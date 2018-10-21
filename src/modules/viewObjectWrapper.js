var dMode = () => deleteMode.attr("checked");

function GetViewObjectWrapper(someObject) {
    let uuid = uuidv4();
    
    let wrapper = $("<div id='"+uuid+"'></div>");
    wrapper.Id = uuid;
    wrapper.contextMenuAction =(ev) => {
        switch(ev.currentTarget.children[0].tagName)
        {
            case "TABLE":
                $(ev.currentTarget).after(TableEditorDropdown);
                ShowTableEditor(ev);
        }
        ev.preventDefault();
    };
    wrapper.clickAction = (e) => {
        if(dMode()==='checked')
        {
            var itemToRemove = viewData.filter(x=> x.Id==e.currentTarget.id);
            var index = viewData.indexOf(itemToRemove[0]);
            if(index!=-1)
            {
                viewData.splice(index,1);
                showArea.RefreshView();
            }
            
        }
        // alert(e.currentTarget.innerHTML);
        
    };
    let result = wrapper.append(someObject);
    return result;
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

