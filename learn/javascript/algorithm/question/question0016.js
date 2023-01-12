// ### RADIX SORT
// Bu metodla karsilastirma yapmayiz.
// Bu metoda gore 3 basamakli bir sayi her zaman 2 basamakli bir sayidan buyukdur.

// ### YOUR AREA
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let x = 0; x < nums.length; x++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[x]));
  }
  return maxDigits;
}

function radixSort(arr, left = 0, right = arr.length - 1) {
  let maxDigitCount = mostDigits(arr);
  for (let x = 0; x < maxDigitCount; x++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let y = 0; y < arr.length; y++) {
      let digit = getDigit(arr[y], x);
      digitBuckets[digit].push(arr[y]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
console.log(
  radixSort([902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29])
);

//

//

//

//

//

//

// ### PSEUDO CODE
// num'un x'nci basamakta olan rakami secegimiz bir fonksiyon olustururuz
// console.log(getDigit(123456, 0)); //6
// console.log(getDigit(123456, 1)); //5
// console.log(getDigit(123456, 2)); //4

// Verilen rakamin kac basamakli sayi oldugunu bulacagimiz fonksiyon olustururuz.
// console.log(digitCount(2)); // 1
// console.log(digitCount(412)); // 3
// console.log(digitCount(12345)); // 5

// En fazla digite haneye sahip rakami bulacagimiz fonksiyon olustururuz => mostDigits(nums)

// radixSort metodunu olusturur yukaridakilerini kullanarak siralamamizi yapariz
// maxDigitCount degiskeni olusturur gelen array'i mostDigits(arrray) icine godnererek esitleriz
// Ve bu maxDigigitCounts kadar loop dondeririz.
// Ve bu loop icinde digitBuckets adinda her rakam icin yani 10  elemanli bir array degiskeni tanimlariz
// Ve bunun altindada yeni bir loop olustururuz ve numalralari doneriz bu arrayle
// digitlerini alip digitbucket'daki hane sayisina gore bucket'a atariz
// Ve son olarak ilk loop'un icinde sonunda concat  yapar digitBucket''imizi birlestiririz
// Ve return yapar numaralari doenriz

// ### SOLUTION
