// 최대값과 최솟값
function solution3(s) {
	function solution(s) {
		const arr = s.split(' ').map(e => e * 1);

		const max = Math.max(...arr);
		const min = Math.min(...arr);

		return `${min} ${max}`;
	}
}

//JadenCase 문자열 만들기
function solution5(s) {
	const arr = s.split(" ");
	return arr.map(e => e.substring(0, 1).toUpperCase() + e.substring(1).toLowerCase()).join(' ');
}

// 최솟값 만들기
function solution6(A,B){
	const sortedA = A.sort((a,b) => a - b);
	const sortedB = B.sort((a,b) => b - a);
	return sortedA.reduce((a, c, index) => a + (c * sortedB[index]), 0);
}
