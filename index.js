module.exports = function sample(str) {
  return str.split(" ");
};

module.exports = function dotter(str) {
  return str.replace(" ", ".");
};

module.exports = function cryptit(str) {
  const password = str;
  const arr = password.split("");
  let num,
    x,
    res = "";
  arr.forEach(function (ch) {
    num = Number(ch);
    if (!isNaN(num)) {
      if (num % 2 == 0) {
        res += String.fromCharCode(57 - num) + "&";
      } else {
        res += String.fromCharCode(num + 103) + "#";
      }
    } else {
      num = ch.charCodeAt(0);
      x = String.fromCharCode(num - num / 2);
      res += x;
    }
  });
  return res;
};

module.exports = function decryptit(uPwd, cPwd) {
  let crypt = cryptit(uPwd);
  return (crypt == cPwd) ? true : false;
}
