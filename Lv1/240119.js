//내적
function solution1(a, b) {
  return a.map((e, idx) => e * b[idx]).reduce((a,b) => a + b);
}

//가운데 글자 가져오기
function solution2(s) {
  const len = s.length;

  let index = Math.round(len / 2);
  if (len % 2 === 0) {
      return s[index - 1] + s[index];
  }

  return s[index - 1];
}

//수박수박수박수박수박수?
function solution3(n) {
  const str = '수박';
  return str.repeat(Math.round(n / 2)).slice(0, n);
}

//약수의 개수와 덧셈
//*hint: 제곱근이 정수면 약수의 개수가 홀수다.
function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num/2; i++) {
      if (num % i === 0) {
          divisors.push(i);
      }
  }
  return [...divisors, num];
}

function solution4(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
      const divisors = getDivisors(i);

      if (divisors.length % 2 === 0) {
          answer += i;
      } else {
          answer -= i;
      }
  }

  return answer;
}

//문자열 내림차순으로 배치하기
function solution5(s) {
  const arr = s.split('');
  const sortArr = arr.sort().reverse();
  return sortArr.join('');
}

//부족한 금액 계산하기
function solution6(price, money, count) {
  let fee = 0;

  for (let i = 1; i <= count; i++) {
      fee += price * i;
  }

  return fee - money > 0 ? fee - money : 0 ;
}
