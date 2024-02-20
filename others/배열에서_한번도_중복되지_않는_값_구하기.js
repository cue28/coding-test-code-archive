// 배열에서 한번도 중복되지 않는 값 구하기
function findUnique(arr) {
  const valueCount = {};

  arr.forEach((str) => {
    if (valueCount[str]) {
      valueCount[str] += 1;
    } else {
      valueCount[str] = 1;
    }
  });

  const uniqueValues = Object.keys(valueCount).filter(
    (item) => valueCount[item] === 1
  );

  return uniqueValues.map((item) => item * 1);
}

const arr = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueValues = findUnique(arr);
console.log(uniqueValues); // [1, 2, 3, 6]
