//describe the class ShoppingListItem
describe("ShoppingListItem", function(){
  it("should be a function", function(){
    expect(ShoppingListItem).to.be.a('function');
  });
  it("should have a property called 'name'", function(){
    expect(ShoppingListItem).to.have.a('property');
  });
  it("should have a property called 'description'", function(){
    expect(ShoppingListItem).to.have.a('property');
  });
  it("should have a property called 'is_done'", function(){
    expect(ShoppingListItem).to.have.a('property');
  });
  it("Should have a constructor method that accepts 2 arguments", function(){
    expect(ShoppingListItem).to.have.a("constructor");
  });
  describe("Check", function(){
    it("Should have a method called 'check'", function(){
      expect(check).to.set.is_done.to("true");
    });
    });
  describe("Uncheck", function(){
    it("Should have a method called 'check'", function(){
      expect(uncheck).to.set.is_done.to("false");
    });
  });
  describe("Render", function(){
    it("Should have a method called 'render'", function(){
      expect(render).to.call.a("function");
    });
    it("Should return a string", function(){
      expect(render).to.return.a("string");
    });
  });
});


// describe the class ShoppingList
describe("ShoppingList", function(){
  it("should be a function", function(){
    expect(ShoppingList).to.be.a('function');
  });
   it("should have a property named 'items'", function(){
    expect(ShoppingList).to.have.the.property('items');
  });
  it("should have a constructor that initializes items as an empty Array", function(){
    expect(ShoppingList).to.have.a('constructor');
  });
  it("should have a method named 'addItem' that accepts a single ShoppingListItem argument", function(){
    expect(ShoppingList).to.have.a("method");
  });
  describe("addItem", function(){
    it("should invoke the 'addItem' method", function(){
      expect(addItem).to.envoke.a('function');
        });
    it("should return an array", function(){
      expect(addItem).to.return.an('array');
    });
  });
  describe("removeItem", function(){
    it("should accept a single argument", function(){
      expect(removeItem).to.return.a("function");
    });
    it("should remove the last item in the 'item' array", function(){
      expect(removeItem).to.remove.an.object.from.an('array');
    });
  });
  describe("Render", function(){
    it("Should have a method called 'render'", function(){
      expect("render").to.call.a("function");
    });
    it("should return a string", function(){
      expect("render").to.return.a("string");
    });
  });
});