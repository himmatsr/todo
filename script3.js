// var i=0;
var arr = [];
 function addElement(){
    var container = document.getElementById("container");
    var inputvalue = document.getElementById("input");
    if(inputvalue.value != ''){
        
        arr.push(inputvalue.value);
        create(arr);

    }

 }



 function create(arr){
    var html='';
    arr.forEach(myfunc);
        function myfunc(item, index){
            html += `<div class="item">
		<input type="text" name="text" class="item_input" id="${index}" disabled>
		<button class="edit"  onclick="editfunc(${index})">EDIT</button>
        <button class="remove"  onclick ="removefunc(${index})">REMOVE</button>
        <input type="checkbox" name = "delete" class="delete" value="${index}">
        </div>`

        }
        container.innerHTML = html;

        arr.forEach(myfunc2);
        function myfunc2(item, index){
            document.getElementsByClassName("item_input")[index].value = item;
        }

    }



 function editfunc(index){
     var edit = document.getElementsByClassName("item_input")[index];
     var editbtn = document.getElementsByClassName("edit")[index];

     console.log(edit.value);
     if(edit.disabled == true){
         edit.disabled= !edit.disabled;
     }
     else{
        edit.disabled= !edit.disabled;
     }
     if(editbtn.innerHTML =="EDIT"){
        editbtn.innerHTML ="SAVE";
     }
     else{
        editbtn.innerHTML ="EDIT";
        arr[index]=edit.value;
     }

 }



 function removefunc(index){
    arr.splice(index,1);
    create(arr);
 }


 
 function deleteall(){
     var check = document.getElementsByClassName("delete");
     var i;
     var n=check.length;
    for(i=0;i<n;i++){
        if(check[i].checked == true){
            arr[i] = "nan";
        }
        // console.log(arr[i]);
    }
    arr=arr.filter(myfilter);

    function myfilter(strg){
        return strg!="nan";
    }
    create(arr);
    
 }

