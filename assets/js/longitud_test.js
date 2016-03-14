var expect = chai.expect;

describe("Longitud", function() {
  describe("Constructor", function() {
    it("Debería tener un tipo y un valor", function() {
      var long = new Longitud(5, 'M');
      expect(long.valor).to.equal(5);
      expect(long.tipo).to.equal("M");
    });
  });
});
