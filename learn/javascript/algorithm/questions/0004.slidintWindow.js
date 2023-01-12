function maxSubArray(arr, number) {
  let total = 0;
  arr.sort();
  for (let x = 1; x <= number; x++) {
    total += arr[arr.length - x];
  }
  console.log(total);
}

maxSubArray([100, 200, 300, 400], 2);
maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
maxSubArray([-3, 4, 0, -2, 6, -1], 2);
maxSubArray([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
maxSubArray([2, 3], 3);

function minSubArrayLen(arr, number) {
  let total = 0;
  let length = 0;
  arr.sort();
  for (let x = arr.length - 1; x > -1; x--) {
    if (total < number) {
      total += arr[x];
      length++;
    }
  }
  console.log(length);
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);

function findLongestSubstring(substring) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let x = 0; x < substring.length; x++) {
    let char = substring[x];
    if (seen[char]) {
      start++;
    }
    seen[char] = 1;
    longest++;
  }
  return longest - start * 2;
}

console.log(findLongestSubstring("rithmschool"));

//maxSubArray Solution
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
//minSubArrayLen Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
//findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
