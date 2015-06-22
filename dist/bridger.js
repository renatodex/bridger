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
;(function(window, document, jQuery, undefined) {
  var Adapter = "jQuery";

  var Bridger_jQuery_Methods = function(jQuery, buildArray) {
    var $ = function(elementName){
      return buildArray(jQuery(elementName));
    };
    var addClass = function(class_name){
      return buildArray(this.jresult.addClass(class_name));
    };
    var removeClass = function(class_name){
      return buildArray(this.jresult.removeClass(class_name));
    };
    var attr = function(key, value){
      if(value === undefined) {
        return this.jresult.attr(key);
      } else {
        return buildArray(this.jresult.attr(key, value));
      }
    };
    var children = function(){
      return buildArray(this.jresult.children());
    };
    var css = function(key, value){
      if(value === undefined) {
        return this.jresult.css(key);
      } else {
        return buildArray(this.jresult.css(key,value));
      }
    };
    var data = function(key, value){
      if(value === undefined) {
        return this.jresult.data(key);
      } else {
        return buildArray(this.jresult.data(key,value));
      }
    };
    var each = function(fn){
      return buildArray(this.jresult.each(fn));
    };
    var find = function(child_element){
      return buildArray(this.jresult.find(child_element));
    };
    var first = function(){
      return buildArray(this.jresult.first());
    };
    var last = function(){
      return buildArray(this.jresult.last());
    };
    var show = function(){
      return buildArray(this.jresult.show());
    };
    var hide = function(){
      return buildArray(this.jresult.hide());
    };
    var html = function(content){
      var _content = content || false;
      if(_content) {
        return buildArray(this.jresult.html(_content));
      } else {
        return this.jresult.html();
      }
    };
    var text = function(content){
      var _content = content || false;
      if(_content) {
        return buildArray(this.jresult.text(_content));
      } else {
        return this.jresult.text();
      }
    };
    var val = function(content){
      var _content = content || false;
      if(_content) {
        return buildArray(this.jresult.val(_content));
      } else {
        return this.jresult.val();
      }
    };
    var hasClass = function(class_name){
      return buildArray(this.jresult.hasClass(class_name));
    };
    var click = function(fn) {
      if(fn === undefined) {
        return buildArray(this.jresult.click());
      } else {
        return buildArray(this.jresult.click(fn));
      }
    }
    var trigger = function(eventname) {
      return buildArray(this.jresult.trigger(eventname));
    }
    var bind = function(eventname, fn) {
      return buildArray(this.jresult.bind(eventname, fn));
    }
    var before = function(element) {
      return buildArray(this.jresult.before(element));
    }
    var after = function(element) {
      return buildArray(this.jresult.after(element));
    }

    var append = function(element) {
      return buildArray(this.jresult.append(element));
    }

    var prepend = function(element) {
      return buildArray(this.jresult.prepend(element));
    }

    var appendTo = function(element) {
      return buildArray(this.jresult.appendTo(element));
    }

    var prependTo = function(element) {
      return buildArray(this.jresult.prependTo(element));
    }

    var parent = function(element) {
      return buildArray(this.jresult.parent());
    }

    return {
      $:$,
      addClass:addClass,
      removeClass:removeClass,
      attr:attr,
      children:children,
      css:css,
      data:data,
      each:each,
      find:find,
      first:first,
      last:last,
      hasClass:hasClass,
      show:show,
      hide:hide,
      html:html,
      text:text,
      val:val,
      click:click,
      trigger:trigger,
      bind:bind,
      before:before,
      after:after,
      append:append,
      prepend:prepend,
      appendTo:appendTo,
      prependTo:prependTo,
      parent:parent
    }
  };

  var Bridger_jQuery = function() {

    var buildArray = function(result) {
      var real_array = jQuery.makeArray(result);
      var length = real_array.length;
      var arraylike = {}
      arraylike.length = length;
      arraylike.splice = [].splice;

      for(var i = 0; i < length; i++) {
        arraylike[i] = real_array[i];
      }

      for (var attrname in bridge_methods) { arraylike[attrname] = bridge_methods[attrname]; }
      arraylike.result = arraylike;
      arraylike.jresult = jQuery(arraylike);

      return arraylike;
    }

    var bridge_methods = new Bridger_jQuery_Methods(jQuery, buildArray);

    var initializer = function Bridger_jQuery_Initializer(element_name) {
      return bridge_methods.$(element_name);
    };

    initializer.adapter = function() {
      return Adapter;
    }

    initializer.setup = function() {
      document.body.setAttribute('databridgerAdapter', this.adapter());
    }

    initializer.setup();

    return initializer;
  }

  window.Bridger_jQuery = Bridger_jQuery;
  window.Bridger_jQuery_Methods = Bridger_jQuery_Methods;
  window.Bridger = Bridger;

  if(document.body == null) {
    throw "Bridger cannot be declared at <HEAD>. Please, move it to body";
  } else{
    document.body.setAttribute('databridgerAdapter', Adapter);
  }
})(this, this.document, jQuery);
