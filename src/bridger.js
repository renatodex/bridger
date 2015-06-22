(function(window, document, undefined) {
  var Bridger = function(){

    var adapter = function() {
        return document.body.getAttribute('databridgerAdapter');
    }

    var autoload = function() {
      var adapter_name = document.body.getAttribute('databridgerAdapter');
      var adapter_class = ["Bridger_", adapter_name].join('');
      return new window[adapter_class];
    }

    return {
      adapter:adapter,
      autoload:autoload
    }
  }

  window.Bridger = new Bridger();
})(this, this.document);
