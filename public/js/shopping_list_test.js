
//describe the class ShoppingListItem
 describe('ShoppingListItem', function() {
  var sli = null;
  beforeEach(function() {
    sli = new ShoppingListItem('Pizza', 'Pizza is in the oven, all is right with the world');
  });
  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });
  describe('Instance Properties', function() {
    it('should have a property called \'name\'', function() {
        expect(sli).to.have.a.property('name');
        expect(sli.name).to.be.equal('Pizza');
      });
    it('should have a property called \'description\'', function() {
        expect(sli).to.have.a.property('description');
      });
    it('should have a property called \'is_done\'', function() {
        expect(sli.is_done).to.be.false;
      });
  });
  describe('Instance Methods', function() {
    describe('Check', function() {
      it('Should have a method called \'check\'', function() {
        expect(sli).to.have.a.property('check');
      });
      it('Should set the value of is_done to false', function() {
        expect(sli.uncheck()).to.equal.false;
      });
    });
    describe('Uncheck', function() {
      it('Should have a method called \'uncheck\'', function() {
        expect(sli).to.have.a.property('uncheck');
      });
      it('Should set the value of is_done to false', function() {
          expect(sli.uncheck()).to.equal.false;
        });
    });
    describe('Render', function() {
      it('Should have a method called \'render\'', function() {
        expect(sli.render).to.be.a('function');
      });
      it('Should return a string', function() {
        expect(sli.render()).to.be.a('string');
      });
    });
  });
});

// describe the class ShoppingList
describe('ShoppingList', function() {
  var list = null;
  beforeEach(function() {
    list = new ShoppingList('array');
    var sli = new ShoppingListItem('Pizza', 'Pizza is in the oven, all is right with the world');
  });
  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
  });
  it('should have a property named \'items\'', function() {
    expect(list).to.have.a.property('items');
  });
  describe('Instance Properties', function() {
    describe('addItem', function() {
      it('should have a method named \'addItem\' that accepts a single ShoppingListItem argument', function() {
        expect(list.addItem).to.be.a('function');
      });
      it('should return an array', function() {
        expect(list.addItem()).to.be.an('array');
      });
      it('Should throw an error when anything that is not a ShoppingListItem is passed through', function() {
        expect( list.addItem.bind(list, '')).to.not.throw(Error);
      });
    });
    describe('removeItem', function() {
      it('should accept a single argument', function() {
        expect(list.removeItem).to.be.a('function');
      });
      it('should remove the last item in the \'item\' array', function() {
        expect(list.removeItem()).to.be.an('array');
      });
    });
    describe('Render', function() {
      it('Should have a method called \'render\'', function() {
        expect(list.render).to.be.a('function');
      });
      it('should return a string', function() {
        expect(list.render()).to.be.a('string');
      });
    });
  });
});
