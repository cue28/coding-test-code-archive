// 3진법 뒤집기
function solution1(n) {
	const three = n.toString(3);
	const reverse = three.split('').reverse().join('');
	return parseInt(reverse, 3).toString(10) * 1;
}
