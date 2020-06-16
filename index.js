module.exports = function sample(str) {
  return str.split(" ");
};

module.exports = function dotter(str) {
  return str.replace(" ", ".");
};

module.exports = function cryptit(str) {
  const password = str;
  const arr = password.split("");
  let num;
  arr.forEach(function (c) {
    num = Number(c);
    //case "integers"
    if (!isNaN(num)) {
      if (num % 2 == 0) {
        res += String.fromCharCode(57 - num) + "&";
      } else {
        res += String.fromCharCode(num + 103) + "#";
      }
    } else {
      res += c;
    }
  });
  return res;
};
