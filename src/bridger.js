(function(window, document, undefined) {
  var Bridger = function(){

    var adapter = function() {
        return document.body.getAttribute('databridgerAdapter');
    }

    var autoload = function(adapter_name) {
      var _adapter_name = adapter_name || document.body.getAttribute('databridgerAdapter');
      var _adapter_class = ["Bridger_", _adapter_name].join('');
      return new window[_adapter_class];
    }

    return {
      adapter:adapter,
      autoload:autoload
    }
  }

  window.Bridger = new Bridger();
})(this, this.document);
