// 스택_올바른 괄호 실습

// 나의 코드
function solution1(s){
	let count = 0;

	const start = "(";
	const end = ")";

	const arr = s.split('');
	arr.forEach(el => {
		if (count < 0) {
			return false;
		}
		if (el === start) {
			count += 1;
		} else if (el === end) {
			count -= 1;
		}
	})

	return count === 0;
}

// 여기서부터는 강사님의 풀이 코드
function solution2(s){
	const stack = [];

	for (const c of s) {
		if (c === "(") {
			stack.push(c);
		} else {
			if (stack.length === 0) {
				return false;
			}
			stack.pop();
		}
	}

	return stack.length === 0;
}

// 조금 더 간단하게 풀이한다면?
function solution3(s){
	let count = 0;

	for (const c of s) {
		if (c === "(") {
			count += 1;
		} else {
			if (count === 0) {
				return false;
			}
			count -= 1;
		}
	}

	return count === 0;
}
