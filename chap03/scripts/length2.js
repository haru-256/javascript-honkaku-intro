var msg = "𠮟る";
var len = msg.length;
var num = msg.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1;
console.log(msg.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length);
console.log(msg.length - num);
