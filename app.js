let listCounter = 0;
document.getElementById("text").onkeydown = function(e){
    if(e.keyCode == 13){
      newElement();
    }
 };
function newElement(){
    if(document.getElementById("text").value != ""){
        listCounter++;
        var li = document.createElement("li");
        li.id = listCounter;
        var text = document.getElementById("text").value;
        li.innerHTML = text+'<div class="icons button"><i class="far fa-check-square" id="'+listCounter+'" onclick="checkItem(this)"></i><i class="far fa-times-circle" id="'+ listCounter+'" onclick="removeItem(this)"></i></div>';
        document.getElementById("ul").appendChild(li);
        document.getElementById("text").value = "";
    }
}
function removeItem(element){
    currentElemente = document.getElementById(element.id);
    currentElemente.parentNode.removeChild(currentElemente);
}
function checkItem(element) {
    currentElemente = document.getElementById(element.id);
    currentElemente.style.textDecoration = "line-through";
}