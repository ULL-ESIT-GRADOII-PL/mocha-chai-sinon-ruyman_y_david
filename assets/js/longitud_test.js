var expect = chai.expect;

describe("Longitud", function() {
  describe("Constructor", function() {
    it("Debería tener un tipo y un valor", function() {
      var long = new Longitud(5, 'M');
      expect(long.valor).to.equal(5);
      expect(long.tipo).to.equal("M");
    });
  });
  describe("Metros", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo M y un valor", function() {
        var m = new Metros(5);
        expect(m.valor).to.equal(5);
        expect(m.tipo).to.equal("M");
      });
    });

    describe("#toPulgadas", function() {
        it("Debería convertirse en Pulgadas", function() {
          var pulg = (new Metros(5)).toPulgadas();
          expect(Math.round(pulg.valor * 100) / 100).to.equal(196.85);
        });
      });
  });

  describe("Pulgadas", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo P y un valor", function() {
        var p = new Pulgadas(5);
        expect(p.valor).to.equal(5);
        expect(p.tipo).to.equal("P");
      });
    });

    describe("#toMetros", function() {
        it("Debería convertirse en Metros", function() {
          var pulg = (new Pulgadas(196.85)).toMetros();
          expect(Math.round(pulg.valor)).to.equal(5);
        });
      });
  });
});
