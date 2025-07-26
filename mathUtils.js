const numbers = [76, 18, 3, 3980, 15, 61, 17, 888, 33, 10, 45];

function minNum() {
  return Math.min(...numbers);
}

function maxNum() {
  return Math.max(...numbers);
}

export { minNum };
export { maxNum };
