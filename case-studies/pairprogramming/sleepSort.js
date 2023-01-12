/**
 * From rosettacode.org:
 * In general, sleep sort works by starting a separate task for each item to be sorted,
 * where each task sleeps for an interval corresponding to the item's sort key,
 * then emits the item. Items are then collected sequentially in time.
 * @param array An array to be sorted
 * @param keyFn A function that generates the sorting key for each element
 * @returns A sorted array?
 *
 * Example: sleepSort([{ a:'asd', b:55 }, { a:'xxx', b: 7 }, { a:'xxx3', b: 100 }] , x => x.b)
 *   will set 3 timers, for 55ms, for 7ms and for 100ms; and collect these elements in order of waking up
 *   the first timer to wake up is the one with 7ms, the second in 55ms, the third in 100ms
 *   collect in this order, and you'll have a sorted list
 */
module.exports = function sleepSort(array, keyFn = x => x) {
  // TODO: Implement
  const myPromise = new Promise((resolve, reject) => {
    let newArray = []

    for (let x = 0; x < array.length; x++) {
      let el = array[x]

      setTimeout(() => {
        newArray.push(el)

        if (array.length === newArray.length) {
          resolve(newArray)
        }
      }, keyFn(el))
    }
  })

  return myPromise
}
