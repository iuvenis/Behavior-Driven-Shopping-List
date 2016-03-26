function ShoppingListItem(name, description, is_done) {
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.check = function() {
    this.is_done = true;
  };
  this.uncheck = function() {
    this.is_done = false;
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
}
module.exports = ShoppingListItem;
