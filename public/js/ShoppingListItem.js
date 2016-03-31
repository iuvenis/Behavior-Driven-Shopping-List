var ShoppingListItem = function(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;
};
ShoppingListItem.prototype.check = function() {
  this.is_done = true;
};
ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
};
ShoppingListItem.prototype.render = function() {
  var html_content = '<li id="completed_' + this.is_done + '"><div class="itemHolder"><input type="checkbox" class="checkMark"><span class="nameClass">' + this.name + '</span> <span class="descriptionClass">' + this.description + '</span>' +
     '<button class="removeButton" type="button">Remove</button></div><div class="border"></div></li>';
  return html_content;
};