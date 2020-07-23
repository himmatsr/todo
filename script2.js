var container = document.querySelector('.container');
var inputvalue = document.querySelector('input');

function createItem(name){
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
    	edit.addEventListener('click', () => editfunc(input,edit));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => removefunc(itemBox));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

        function editfunc(input, edit){
        	if(input.disabled === true){
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

        function removefunc(itemBox){
        	itemBox.parentNode.removeChild(itemBox);
        }
}

function addElement(){
	 if(inputvalue.value!== ''){
		console.log(inputvalue.value);
		console.log(inputvalue);
		new createItem(inputvalue.value);
	}
}

function deleteall(){
	var master = document.getElementById('container');
	master.innerHTML = "";
}
