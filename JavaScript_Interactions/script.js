const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

  window.addEventListener('scroll', ()=> {
    setBg();
  })

window.addEventListener('load', () => {

    let submitButton = document.getElementById("submit_button");
    //let inputBox = document.getElementById("input_box");

    //add item to list when entered in the input box
    submitButton.addEventListener('click', (e) => {

        let name = document.getElementById("input_box");    
        let date = document.getElementById("date_box");

        //create the required elements
        let list = document.getElementById("list");
        let listItem = document.createElement("li");
        let listContent = document.createElement("p");
        let ItemDate = document.createElement("p")
        let doneButton = document.createElement("button");

        //give the list item the required values
        listContent.innerHTML = name.value;
        let listId = name.value.replace(/\s/g, '');
        listItem.classList.add("list__item");
        listItem.id = listId;
        doneButton.innerHTML = "DONE";
        doneButton.classList.add("list__button");
        ItemDate.innerHTML = date.value;

        list.appendChild(listItem);
        listItem.appendChild(listContent);
        listItem.appendChild(ItemDate);
        listItem.appendChild(doneButton);
        doneButton.setAttribute("data-id", listId);
        name = "";

        //what happens when you click the DONE button
        doneButton.addEventListener('click', (e) => {

        let item = document.getElementById(e.target.dataset.id);
        item.classList.add("list__item--done")

        })

        //document.body.style.background = '#fa8073';
        setBg();

    });

});