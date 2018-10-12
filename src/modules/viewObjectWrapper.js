var dMode = () => deleteMode.attr("checked");

function GetViewObjectWrapper(someObject) {
    let uuid = uuidv4();
    debugger;
    let wrapper = $("<div id='wrapper"+uuid+"'></div>");
    wrapper.click((e) => {
        debugger;
        if(dMode()==='checked')
        {
            $(e.currentTarget).remove();
        }
        
        debugger;
        alert(e.currentTarget.innerHTML);
        
    });
    let result = wrapper.append(someObject);
    return result;
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

// function DeleteObject()
// {


// }