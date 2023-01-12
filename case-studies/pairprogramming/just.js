const generators = {
  id: () => {
    const n = Math.floor(Math.random() * 10000000) + 10000000
    return n.toString(36)
  },
  name: () => {
    const firstNames = ['Jamie', 'Jimmy', 'Jane', 'Johnny', 'Jorje', 'Joe']
    const lastNames = ['Big', 'Blue', 'Brown', 'Bent', 'Burpy', 'Ballsy']
    return pickRandom(firstNames) + ' ' + pickRandom(lastNames)
  },
  group: () => {
    return pickRandom([
      'tall people',
      'short people',
      'people with medium height',
    ])
  },
  number: (min = 0, max = 100) => {
    // TODO: Implement
    // This generator should respect the given bounds, and return an integer
    let array = []
    for (let x = min; x < max; x++) {
      array.push(x)
    }

    return pickRandom(array)
  },
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

module.exports = just = {
  a: {
    ...generators,
  },
  an: {
    ...generators,
  },
}
