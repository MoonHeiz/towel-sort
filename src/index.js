module.exports = function towelSort (matrix = []) {
  let result = [];
  let isReverse = true;

  for(let subArray of matrix){
    if(isReverse) result = result.concat(subArray);
    else result = result.concat(subArray.reverse())

    isReverse = !isReverse;
  }

  return result;
}
