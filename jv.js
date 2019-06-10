var cardContainer = $('.card-container');
var submit = $('.submit-btn');
submit.on("click", newList);

function newList(){
  var toDo = $('.to-do').val();
  appendNewToDo(toDo);
  var item = $('.to-do').val("")
  }

function appendNewToDo(toDo){
  cardContainer.append(` 
<div class="to-do-card"> 
  <p>${toDo}</p>
  <input type= "checkbox"           class="checkbox">
</div>

`);
  
  
  var checkbox = $('.checkbox');
  checkbox.on("click", remove ); 
}

function remove() {
  event.target.parentNode.remove();
}
