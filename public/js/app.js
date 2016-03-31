(function() {
  var shoppingList = new ShoppingList();
  var html_output = shoppingList.render();
  var content = document.querySelector('#content');
  content.innerHTML = html_output;

  var addToShoppingList = function() {
    var name = document.querySelector('#name');
    var description = document.querySelector('#description');
    var newShoppingListItem = new ShoppingListItem(name.value, description.value);
    shoppingList.addItem(newShoppingListItem);
    name.value = '';
    description.value = '';
    content.innerHTML = shoppingList.render();
  };

  var changeCheckedStatus = function(index, checkbox) {
    if (checkbox.checked) {
      shoppingList.items[index].check();
    } else {
      shoppingList.items[index].uncheck();
    }
    content.innerHTML = shoppingList.render();
  };

  var addToShoppingListButton = document.querySelector('#addToShoppingListButton');
  addToShoppingListButton.addEventListener('click', function() {
    addToShoppingList();
  });

  content.addEventListener('click', function(event) {
    var listItems = event.target.parentNode.parentNode;
    var index = Array.prototype.indexOf.call(listItems.parentNode.childNodes, listItems);
    if (event.target.classList.contains('checkable')) {
      changeCheckedStatus(index, event.target);
    }
    if (event.target.classList.contains('removeButton')) {
      shoppingList.removeItem(shoppingList.items[index]);
      content.innerHTML = shoppingList.render();
    }
  });
})();
