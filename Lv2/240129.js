// 올바른 괄호
function solution2(s){
	const open = '(';
	const close = ')';
	const arr = s.split('');

	if (arr[0] === close || arr[arr.length - 1] === open) {
		return false;
	}

	let count = 0;
	arr.forEach(el => {
		if (count < 0) {
			return false;
		}

		if (el === open) {
			count = count + 1;
		} else {
			count = count - 1;
		}
	});

	return count === 0;
}

// 이진 변환 반복하기
function solution4(s) {
	let changes = 0;
	let zero = 0;

	let target = s;
	while (target !== '1') {
		let withoutZero = '';

		const arr = target.split('');
		arr.forEach(el => {
			if (el === '1') {
				withoutZero = withoutZero + el;
			} else {
				zero++;
			}
		});

		target = withoutZero.length.toString(2);
		changes++;
	}

	return [changes, zero];
}
