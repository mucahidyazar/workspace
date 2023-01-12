const just = require('./just')
const assert = require('./assert')
const sleepSort = require('./sleepSort')

const data = new Array(15).fill(15)
let newData = data.map(x => ({
  id: just.an.id(),
  group: just.a.group(),
  name: just.a.name(),
  height: just.a.number(),
}))

sleepSort(newData, x => x.height).then(sorted => {
  for (let i = 0; i < sorted.length - 1; i++) {
    assert(sorted[i].height, sorted[i + 1].height, (a, b) => a <= b)
  }

  console.log('All OK!')
})
