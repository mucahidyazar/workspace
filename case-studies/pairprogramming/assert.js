/**
 * This function should throw an error if the assertion doesn't return a truthy value for the two arguments.
 * @param term1 First argument
 * @param term2 Second argument
 * @param assertion A function that gets the two arguments, and tests them.
 */
module.exports = function assert(term1, term2, assertion) {
  // TODO: Implement
  if (!assertion(term1, term2)) {
    throw new Error('It is an error')
  }
}
