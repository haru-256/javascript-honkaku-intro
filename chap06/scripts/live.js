document.addEventListener(
  "DOMContentLoaded",
  function () {
    var li = document.getElementsByTagName("li");
    console.log("変更前：" + li.length);

    var ul = document.getElementById("list");
    let elem = document.createElement("li");
    let text = document.createTextNode("hogeHoge");
    elem.appendChild(text);
    // ul.appendChild(document.createElement("li"));
    ul.appendChild(elem);
    console.log("変更後：" + li.length);
  },
  false
);
