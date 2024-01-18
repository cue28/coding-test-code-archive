//정수 내림차순으로 배치하기
function solution1(n) {
  const arr = String(n).split('');
  return Number(arr.sort((a,b) => b - a).join(""));
}

//하샤드 수
function solution2(x) {
  return x % String(x).split("").reduce((a,b) => Number(a) + Number(b)) === 0;
}

//두 정수 사이의 합
function solution3(a, b) {
  let answer = 0;

  if (a > b) {
      for (let i = b; i <= a; i++) {
          answer += i;
      }
  } else {
         for (let i = a; i <= b; i++) {
          answer += i;
      }
  }

  return answer;
}

//음양 더하기
function solution4(absolutes, signs) {
  const arr = absolutes.map((num, index) => signs[index] > 0 ? num : -num)
  const sum = arr.reduce((a,b) => a + b);
  return sum;
}

//콜라츠 추측
function solution5(num) {
  if (num === 1) {
      return 0;
  }

  let answer = 0;
  let n = num;
  while (n > 1) {
      if (answer === 500) {
          answer = -1;
          break;
      }
      if (n % 2 === 0) {
          n = n / 2;
      } else {
          n = (n * 3) + 1;
      }
      answer += 1;
  }

  return answer;
}

//서울에서 김서방 찾기
function solution6(seoul) {
  const location = seoul.findIndex(e => e === "Kim");
  return `김서방은 ${location}에 있다`;
}

//나누어 떨어지는 숫자 배열
function solution7(arr, divisor) {
  const answer = [];

  arr.forEach(e => e % divisor === 0 && answer.push(e));

  if (answer.length === 0) {
      answer.push(-1);
  }

  return answer.sort((a,b) => a-b);
}

//없는 숫자 더하기
function solution8(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
      if(numbers.findIndex(e => i === e) < 0) {
          answer += i
      }
  }

  return answer;
}

//핸드폰 번호 가리기
function solution9(phone_number) {
  const length = phone_number.length - 4;
  return "*".repeat(length) + phone_number.substring(length);
}

//제일 작은 수 제거하기
function solution10(arr) {
  const min = Math.min(...arr);
  const result = arr.filter(e => e !== min);

  if (result.length === 0) {
      return [-1];
  }

  return arr.filter(e => e !== min);
}
