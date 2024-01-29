// 최대공약수와 최소공배수
function solution1(n, m) {
	let gcd = 1;
	for (let i = 2; i <= Math.min(n, m); i++) {
		if (n % i === 0 && m % i === 0) {
			gcd = i;
		}
	}

	let lcm = 1;
	for (let i = 1; i <= n * m; i++) {
		if (i % n === 0 && i % m === 0) {
			lcm = i;
			break;
		}
	}

	return [gcd, lcm];
}
/* 유클리드 호제법
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}
 */

// 같은 숫자는 싫어
function solution3(arr)
{
	const answer = [];

	arr.forEach(el => {
		if (answer[answer.length - 1] === el) {
			return;
		}

		answer.push(el)
	})

	return answer;
}
