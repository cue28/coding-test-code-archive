// 문자열이 주어지면 그 중에서 가장 많이 반복되는 문자를 반환하는 함수를 작성하세요.
// 만약 가장 많이 반복되는 문자가 여러 개라면, 그 중 아무 문자나 반환합니다.

function mostFrequentChar(str) {
  const count = {};

  // 문자 count
  for (const item of str) {
    if (count[item]) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  }

  // 가장 큰 수
  let maxLetter = "";
  let max = 0;
  for (const [key, value] of Object.entries(count)) {
    if (max < value) {
      max = value;
      maxLetter = key;
    }
  }

  return maxLetter;
}

console.log(mostFrequentChar("abc")); // "a"
console.log(mostFrequentChar("hello")); // "l"
console.log(mostFrequentChar("abcaabbccbb")); // "b"
console.log(mostFrequentChar("apple")); // "p"
