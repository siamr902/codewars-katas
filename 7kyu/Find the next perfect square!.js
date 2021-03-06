// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  if (!Number.isInteger(Math.sqrt(sq))) {
    return -1
  }
  return Math.pow((Math.sqrt(sq) + 1), 2)
}
