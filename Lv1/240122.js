// 문자열 다루기 기본
function solution1(s) {
	if (s.length !== 4 && s.length !== 6) {
		return false;
	}

	if (s.includes('e')) {
		return false;
	}

	return !isNaN(s);
}

// 행렬의 덧셈
// map 써도 될 뻔..
function solution2(arr1, arr2) {
	var answer = [];

	arr1.forEach((e1, idx1) => {

		const arr = [];
		e1.forEach((e2, idx2) => {
			arr.push(e2 + arr2[idx1][idx2]);
		})

		answer.push(arr);
	})

	return answer;
}

// 직사각형 별찍기 solution4
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
	const n = data.split(" ");
	const a = Number(n[0]), b = Number(n[1]);
	const star = "*".repeat(a);
	console.log(`${star}\n`.repeat(b));
});
