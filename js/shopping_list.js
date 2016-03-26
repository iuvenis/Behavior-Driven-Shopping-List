
var ShoppingList = function(items) {
  this.items = [];
  this.addItem = function() {
    this.items.push(ShoppingListItem);
    return this.items;
  };
  this.removeItem = function() {
    for (var i = 0; i < items.length; i++) {
      var remove = items[i];

      if (listToDelete.indexOf(remove) !== -1) {
        items.splice(i, 1);
      }
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

module.exports = ShoppingList;

// function ShoppingListItem(name, description, is_done) {
//   this.name = name;
//   this.description = description;
//   this.is_done = false;
//   this.check = function() {
//     this.is_done = true;
//   };
//   this.uncheck = function() {
//     this.is_done = false;
//   };
//   this.render = function() {
//     /*jshint multistr: true*/
//     var some_html_output = '<ul> \
//                             <li class="completed_false"> \
//                             <span>Burritos</span> \
//                             <span>Pizza is in the oven, all is right with the world</span> \
//                             </li> \
//                             <ul>';
//     return some_html_output;
//   };
// }
// module.exports = ShoppingListItem;