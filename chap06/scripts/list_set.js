document.addEventListener(
  "DOMContentLoaded",
  function () {
    var setListValue = function (name, value) {
      var opts = document.getElementById(name).options;
      console.log(opts);
      console.log(document.getElementById(name));

      for (var i = 0, len = opts.length; i < len; i++) {
        var opt = opts.item(i);
        console.log(opt);
        console.log(document.getElementById(name).item(i));
        if (value.indexOf(opt.value) > -1) {
          opt.selected = true;
        }
      }
    };

    var getSelectValue = function (name) {
      var opts = document.getElementById(name);
      let results = [];
      for (var i = 0, len = opts.length; i < len; i++) {
        var opt = opts.item(i);
        if (opt.selected) {
          results.push(opt.value);
        }
      }
      return results;
    };

    setListValue("food", ["餃子", "焼き肉"]);
    document.getElementById("btn").addEventListener("click", function () {
      window.alert(getSelectValue("food"));
    });
  },
  false
);
