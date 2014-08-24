_.mixin({
  sanitize: function(str, config) {
    try {
      var n = document.createElement('div');
      n.innerHTML = str;
      var s = new Sanitize(config || Sanitize.Config.BASIC);
      var c = s.clean_node(n);
      var o = document.createElement('div');
      o.appendChild(c.cloneNode(true));
      return o.innerHTML;
    }
    catch (e) {
      return _.escape(str);
    }
  }
});