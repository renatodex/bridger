(function(window, document, undefined) {
  var Bridger = function(){

    var autoload = function() {
        return document.body.getAttribute('databridgerAdapter');
    }

    return {
      autoload:autoload
    }
  }

  window.Bridger = new Bridger();
})(this, this.document);
