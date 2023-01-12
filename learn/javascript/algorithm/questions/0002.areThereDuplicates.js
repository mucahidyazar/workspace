function areThereDuplicates(arr) {
  let obj = {};

  for (let char in arr) {
    let charValue =
      typeof arr[char] === "string"
        ? (arr[char] = arr[char].charCodeAt())
        : (arr[char] = arr[char]);

    if (!obj[charValue]) {
      obj[charValue] = 1;
    } else if (obj[charValue]) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates([1, 3, 3]));
console.log(areThereDuplicates([1, 1, 2]));
console.log(areThereDuplicates(["d", "c", "c", "a"]));

//HIS SOLUTIONS
//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
//areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
