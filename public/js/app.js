var sl = ShoppingList;
(function contentChange() {
  var rendered = sl.render();
  document.getElementById('content').innerHTML = rendered;
}
)();

var add_to_shopping_list = function() {
  var new_shopping_list_item = ShoppingListItem(title, description);
};

// var removeItemButtonClicked = function() {
//   function ShoppingListItenClicked() {
//   shoppingListItem.removeitem();
// }
// };

