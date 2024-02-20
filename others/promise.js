// 배열에 있는 가장 큰 수만큼 대기후에 (setTimeout, Promise 사용)
// 배열의 모든 값의 합을 구하는 코드를 작성해 주세요.

function timer(time) {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(), time * 1000);
  });
}

async function run(arr) {
  let max = Math.max(...arr);
  await timer(max);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  return sum;
}
run([2, 3, 5, 3, 2]); // 15
