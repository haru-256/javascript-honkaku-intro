document.addEventListener(
  "DOMContentLoaded",
  function () {
    var Counter = function (elem) {
      this.count = 0;
      this.elem = elem;
      var count_func = function () {
        console.log(this);
        this.count++;
        this.show();
      };
      elem.addEventListener(
        "click",
        // count_func,
        count_func.bind(this), // bindを使用するとこんな感じ
        false
      );

      // elem.addEventListener('click', () => {
      // this.count++;
      // this.show();
      // }, false);
    };

    Counter.prototype.show = function () {
      console.log(this.elem.id + "は" + this.count + "回クリックされました。");
    };

    var c = new Counter(document.getElementById("btn"));
  },
  false
);
