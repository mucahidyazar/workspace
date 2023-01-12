function sameFrequency(par1, par2) {
  try {
    let obj = {};

    if (par1.toString().length !== par2.toString().length) {
      return false;
    }
    for (char in par1.toString()) {
      if (obj[par1.toString()[char]]) {
        obj[par1.toString()[char]]++;
      } else {
        obj[par1.toString()[char]] = 1;
      }
    }

    for (char in par2.toString()) {
      if (obj[par2.toString()[char]] === 0) {
        return false;
      } else if (obj[par2.toString()[char]]) {
        obj[par2.toString()[char]]--;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

//HIS SOLUTION
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
