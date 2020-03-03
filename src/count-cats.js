module.exports = function countCats(matrix = []) {
  if(matrix.length === 0) return 0;
  let catsCounter = 0;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === "^^") catsCounter++;
    }
  }
  return catsCounter;
};
