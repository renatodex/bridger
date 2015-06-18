var BridgeMethods = function(jQuery, buildArray) {
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
    return buildArray(this.jresult.attr(key, value));
  };
  var children = function(){
    return buildArray(this.jresult.children());
  };
  var css = function(key, value){
    return buildArray(this.jresult.css(key, value));
  };
  var data = function(key, value){
    return buildArray(this.jresult.data(key, value));
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
  var hasClass = function(class_name){
    return buildArray(this.jresult.hasClass(class_name));
  };
  var show = function(){
    return buildArray(this.jresult.show());
  };
  var hide = function(){
    return buildArray(this.jresult.hide());
  };
  var html = function(content){
    return buildArray(this.jresult.html(content));
  };
  var text = function(content){
    return buildArray(this.jresult.text(content));
  };
  var val = function(new_value){
    return buildArray(this.jresult.val(new_value));
  };

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
  }
};

var Bridge_jQuery = function(jQuery) {

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

  var bridge_methods = new BridgeMethods(jQuery, buildArray);

  return function(element_name) {
    return bridge_methods.$(element_name);
  };
}
