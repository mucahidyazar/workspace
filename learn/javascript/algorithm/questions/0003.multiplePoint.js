function averagePair(par1, par2) {
  let first = 0;

  for (let x = 1; x < par1.length; x++) {
    if ((par1[first] + par1[x]) / 2 === par2) {
      return true;
    } else if ((par1[first] + par1[x]) / 2 < par2) {
      first++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 9, 10, 15], 6));
console.log(averagePair([], 4));

//averagePair Solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

//isSubsequence
function isSubsequence(str1, str2) {
  if (!str1) return true;
  let index = 0;

  try {
    for (let x = 0; x < str2.length - 1; x++) {
      if (index === str1.length) {
        return true;
      } else if (str2[x] === str1[index]) {
        index++;
        x = 0;
      }
    }
    return false;
  } catch (err) {
    return false;
  }
}

//isSubsequence Solution - Iterative +
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
//isSubsequence Solution - Recursive but not O(1) Space+
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
