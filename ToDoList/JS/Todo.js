
 

var addtask = document.getElementById("add");
addtask.addEventListener('click',taskadd);

 
 function taskadd(){
  var row =1 ;
  var user = document.getElementById('TaskName').value;
  var dd = document.getElementById('Duedate').value;
  var st = document.getElementById('Status').value;
 
 
  if(!user || !dd || !st){
    alert("Please fill the boxes");
    return;
  }
  
  var list =document.getElementById('list');
  
  var newRow = list.insertRow(row);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML=user;
  cell2.innerHTML=dd;
  cell3.innerHTML=st;
  cell4.innerHTML= `<a><button onClick="remove(this)">Delete</button></a>`;
  row++;
   
 }

 function resetForm(){
  document.getElementById('TaskName').value = '';
  document.getElementById('Duedate').value = '';
  document.getElementById('Status').value = '';
 }
function remove(td){
 row = td.parentElement;
 document.getElementById('list').deleteRow(row.rowIndex);
 resetForm();
 
}













    
   
 



