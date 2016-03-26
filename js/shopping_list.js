
var ShoppingList = function(items) {
  this.items = [];
  this.addItem = function() {
    if ((typeof ShoppingListItem) !== 'function') {
      throw new Error('That is not an item on the list.');
    } else {
      this.items.push(ShoppingListItem);
      return this.items;
    }
  };
  this.removeItem = function() {
    if ((typeof ShoppingListItem) !== 'function') {
      throw new Error('That is not an item on the list.');
    } else {
      this.items.pop(ShoppingListItem);
      return this.items;
    }
  };
  this.render = function() {
    /*jshint multistr: true*/
    var some_html_output = '<ul> \
                              <li class="completed_false"> \
                                <span>Burritos</span> \
                                <span>Pizza is in the oven, all is right with the world</span> \
                              </li> \
                            <ul>';
    return some_html_output;
  };
};