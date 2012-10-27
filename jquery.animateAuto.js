(function($) {

  var methods = {
    height: function(callback) {
      return this.each(function() {
        var self = $(this)
        
        var cloned = self.clone()
        cloned.css({
          visibility: "hidden",
          display: "block",
          height: "auto",
          position: "absolute"
        })
        cloned.insertBefore(self)
        
        
        if (callback) callback(cloned.height())
        
        cloned.remove()
      })
    },
    width: function(callback) {
      return this.each(function() {
        var self = $(this)
        
        var cloned = self.clone()
        cloned.css({
          visibility: "hidden",
          display: "block",
          height: "auto",
          position: "absolute"
        })
        cloned.insertBefore(self)
        
        
        if (callback) callback(cloned.width())
        
        cloned.remove()
      })
    },
  };

  $.fn.animateAuto = function(method) {
    // Method calling logic
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      return methods.init.apply(this, arguments);
    }
  };


})(jQuery);


