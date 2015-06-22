describe('Bridger Core', function() {
  it("should retrieve bridger adapter from body data property if present", function() {
    document.body.setAttribute('databridgerAdapter', 'jQuery');
    expect(Bridger.adapter()).toEqual("jQuery");
  });

  it("should auto instantiate loaded adapter", function() {
    expect(Bridger.autoload().adapter()).toEqual("jQuery");
  });
});
