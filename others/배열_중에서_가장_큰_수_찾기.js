// 배열 중에서 가장 큰 수 찾기
function findMax(arr) {
  let max = arr[0];

  for (const num of arr) {
    if (max < num) {
      max = num;
    }
  }

  return max;
}

console.log(findMax([3, 7, 1, 9, 4, 2])); // 9
