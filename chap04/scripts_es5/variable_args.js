function sum() {
  let result = 0;
  for (let tmp of arguments) {
    if (typeof tmp !== "number") {
      throw new Error("引数が数値ではありません：" + tmp);
    }
    result += tmp;
  }
  return result;
}

try {
  console.log(sum(1, 3, 5, 7, 9));
} catch (e) {
  window.alert(e.message);
}
