function hoge() {
  // var args = Array.prototype.slice.call(arguments);
  var args = Array.from(arguments);
  console.log(args.join("／"));
}

hoge("Angular", "React", "Backbone");
