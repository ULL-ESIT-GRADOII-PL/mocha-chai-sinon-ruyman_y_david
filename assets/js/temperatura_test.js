var expect = chai.expect;

describe("Temperatura", function() {
  describe("Constructor", function() {
    it("Debería tener un tipo y un valor", function() {
      var temp = new Temperatura(5, 'C');
      expect(temp.valor).to.equal(5);
      expect(temp.tipo).to.equal("C");
    });
  });
});
