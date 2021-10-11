const url = 'https://jsonplaceholder.typicode.com/users';
// const deleteButton = document.getElementsByClassName('dlt-btn');
const editButton = document.getElementsByClassName("changeBtn");



async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        addTable(data);
    } catch(e) {
        console.error(e);
    }
}
fetchData();

function addTable(data){
    let table = document.querySelector('table');
    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td><p class="editable" contenteditable="false">${data[i].name}</p></td>
                        <td><p class="editable" contenteditable="false">${data[i].username}</p></td>
                        <td><p class="editable" contenteditable="false">${data[i].email}</p></td>
                        <td><p class="editable" contenteditable="false">${data[i].website}</p></td>
                        <td><p class="editable" contenteditable="false">${data[i].company.name}</p></td>
                        <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
                        <td><button onclick="editContent(this);">Edit</button></td>
                   </tr>`;
                      
        table.innerHTML += row;
    }
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  
function editContent(button) {
    let edit = document.getElementsByClassName("myButton");
    if (edit.contenteditable == "true") {
      edit.contenteditable = "false";
      button.innerHTML = "Edit";
      let editable_elements = document.querySelectorAll("[contenteditable=true]");
        for(let i=0; i < editable_elements.length; i++)
        editable_elements[i].setAttribute("contenteditable", false);
    } else {
      edit.contenteditable = "true";
      button.innerHTML = "Save";
      let editable_elements = document.querySelectorAll("[contenteditable=false]");
        for(let i=0; i < editable_elements.length; i++)
        editable_elements[i].setAttribute("contenteditable", true);
    }
}