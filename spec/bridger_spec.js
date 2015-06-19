describe('Bridger Core', function() {
  it("should retrieve bridger adapter from body data property if present", function() {
    document.body.setAttribute('databridgerAdapter', 'jQuery');
    expect(Bridger.autoload()).toEqual("jQuery");
  });
});
