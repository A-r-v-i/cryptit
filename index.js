const cryptit = (str) => {
  const arr = str.split("");
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

const decryptit = (uPwd, cPwd) => {
  let crypt = cryptit(uPwd);
  if (crypt === cPwd) {
    return true;
  }
  return false;
};

module.exports = {
  cryptit,
  decryptit,
};
