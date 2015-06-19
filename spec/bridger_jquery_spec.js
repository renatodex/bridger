describe('Bridger Tests', function() {
  describe("Array Like Constructor", function(){
    var bridger;

    beforeEach(function() {
      bridger = new Bridge_jQuery(jQuery);
    })

    it("make sure result is a CUSTOM array-like (not the jQuery one)",function() {
      var collection = bridger("body");
      expect(typeof(collection.result)).toBe('object');
    });

    describe(".$ (retrieve DOM)", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").$("a");
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return the same as jQuery corresponding method", function() {
        var collection = bridger("body");
        var collection_jquery = jQuery("body");
        expect(collection[0]).toEqual(collection_jquery[0]);
      })
    });

    describe(".first", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").first();
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return the same as jQuery corresponding method", function() {
        var collection = bridger("body").first();
        var collection_jquery = jQuery("body").first();
        expect(collection[0]).toEqual(collection_jquery[0]);
      });
    });

    describe(".last", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").last();
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return the same as jQuery corresponding method", function() {
        var collection = bridger("body").last();
        var collection_jquery = jQuery("body").last();
        expect(collection[0]).toEqual(collection_jquery[0]);
      });
    });

    describe(".show", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").show();
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return the same as jQuery corresponding method", function() {
        var collection = bridger("body").show();
        var collection_jquery = jQuery("body").show();
        expect(collection[0]).toEqual(collection_jquery[0]);
      });
    });

    describe(".hide", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").hide();
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return the same as jQuery corresponding method", function() {
        var collection = bridger("body").hide();
        var collection_jquery = jQuery("body").hide();
        expect(collection[0]).toEqual(collection_jquery[0]);
      });
    });

    describe(".html", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger(".test").html("this-is-a-text");
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return element if content is passed", function() {
        var fixture = setFixtures('<div class="test"></div>')
        var collection = bridger(".test").html('test-text');
        var collection_jquery = jQuery(".test").html("test-text");
        expect(collection.html()).toEqual(collection_jquery.html());
      });

      it("should return html if content is not passed", function() {
        var fixture = setFixtures('<div class="test"></div>')
        jQuery(".test").html("test-text");
        expect(bridger(".test").html()).toEqual('test-text');
      });
    });

    describe(".text", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger(".test").text("this-is-a-text");
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return element if content is passed", function() {
        var fixture = setFixtures('<div class="test"></div>')
        var collection = bridger(".test").text('test-text');
        var collection_jquery = jQuery(".test").text("test-text");
        expect(collection.text()).toEqual(collection_jquery.text());
      });

      it("should return text if content is not passed", function() {
        var fixture = setFixtures('<div class="test"></div>')
        jQuery(".test").text("test-text");
        expect(bridger(".test").text()).toEqual('test-text');
      });
    });

    describe(".val", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger(".test").val("this-is-a-text");
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return element if content is passed", function() {
        var fixture = setFixtures('<input type="" class="test"></input>')
        var collection = bridger(".test").val('test-text');
        var collection_jquery = jQuery(".test").val("test-text");
        expect(collection.val()).toEqual(collection_jquery.val());
      });

      it("should return text if content is not passed", function() {
        var fixture = setFixtures('<input type="" class="test"></input>')
        jQuery(".test").val("test-text");
        expect(bridger(".test").val()).toEqual('test-text');
      });
    });

    describe(".addClass", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").addClass('anyclass');
        expect(typeof(collection.result)).toBe('object');
      });

      it("should apply class", function() {
        var fixture = setFixtures('<div class="lompa"></div>')
        var collection = bridger(".lompa").addClass('teste');
        expect(jQuery(collection).hasClass('teste')).toBe(true);
      });
    });

    describe(".removeClass", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").removeClass('anyclass');
        expect(typeof(collection.result)).toBe('object');
      });

      it("should remove class", function() {
        var fixture = setFixtures('<div class="lompa teste"></div>')
        var collection = bridger(".lompa").removeClass('teste');
        expect(jQuery(collection).hasClass('teste')).toBe(false);
        expect(jQuery(collection).hasClass('lompa')).toBe(true);
      });
    });

    describe(".attr", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").attr('anyclass',1);
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return non-object value when second param is not passed", function() {
        $("body").attr("data-test", '1');
        var collection = bridger("body").attr('data-test');
        expect(collection).toEqual('1');
      })
    });

    describe(".children", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").children();
        expect(typeof(collection.result)).toBe('object');
      });
    });

    describe(".css", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").css('margin','10px');
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return non-object value when second param is not passed", function() {
        $("body").css("background-color", "rgb(255, 255, 255)");
        var collection = bridger("body").css('background-color');
        expect(collection).toEqual("rgb(255, 255, 255)");
      })
    });

    describe(".data", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").data('teste',1);
        expect(typeof(collection.result)).toBe('object');
      });

      it("should return non-object value when second param is not passed", function() {
        $("body").attr("data-test", 1);
        var collection = bridger("body").data('test');
        expect(collection).toEqual(1);
      });
    });

    describe(".each", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").each(function(){});
        expect(typeof(collection.result)).toBe('object');
      });
    });

    describe(".hasClass", function() {
      it("chaining calls generate custom ArrayLike", function() {
        var collection = bridger("body").hasClass('test');
        expect(typeof(collection.result)).toBe('object');
      });
    });

    describe("click", function(){});
    describe("trigger", function(){});
    describe("bind", function(){});
    describe("before", function(){});
    describe("after", function(){});
    describe("append", function(){});
    describe("prepend", function(){});
    describe("appendTo", function(){});
    describe("prependTo", function(){});

  });
});
