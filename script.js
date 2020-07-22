

var container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
var add = document.querySelector('.add');
var deleteall = document.querySelector('.deleteall')

class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input,edit));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input,edit){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
        }
        if(edit.innerHTML =="EDIT"){
        	edit.innerHTML = "SAVE";
        }
        else{
        	edit.innerHTML ="EDIT";
        }
    }

    remove(itemBox){
        itemBox.parentNode.removeChild(itemBox);

    }
}

add.addEventListener('click', check);



deleteall.addEventListener('click', fresh);

function check(){ // fucntion for add button
	if(inputValue.value != ""){
		new item(inputValue.value);
	}
}

function fresh(){ // to delete all 
	var master = document.getElementById("container");
  while (master.hasChildNodes()) {
    master.removeChild(master.firstChild);
  }
}



//new item("sport");