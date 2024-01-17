// 짝수와 홀수
function solution1(num) {
    if (num % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

// 평균 구하기
function solution2(arr) {
    const total = arr.reduce((a, b) => a + b);
    const length = arr.length;

    return total / length;
}

// 약수의 합
function solution3(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result += i;
        }
    }


    return result;
}

/// 문자열을 정수로 바꾸기
function solution4(s) {
    return s * 1;
}

// 나머지가 1이 되는 수 찾기
function solution5(n) {
    const m = n - 1;

    let x = 2;
    while (x <= m) {
        if (m % x === 0) {
            return x;
        }
        x = x + 1
    }

    return x;
}

// x만큼 간격이 있는 n개의 숫자
function solution6(x, n) {
    const result = [];

    for (let i = 1; i <= n; i += 1) {
        result.push(i * x)
    }

    return result;
}

// 자릿수 더하기
function solution7(n) {
    return String(n).split('').reduce((a, b) => Number(a) + Number(b)) * 1;
}

// 자연수 뒤집어 배열로 만들기
function solution8(n) {
    return String(n).split('').map(str => Number(str)).reverse();
}

// 문자열 내 p와 y의 개수
function solution9(s){
    const arr = s.split('');

    let p = 0;
    let y = 0;
    arr.forEach(letter => {
        if (letter === 'p' || letter === 'P') {
            p += 1;
        }
        if (letter === 'y' || letter === 'Y') {
            y += 1;
        }
        return ;
    })

    return p === y;
}

// 정수 재곱근 판별
function solution10(n) {
    const pow = Math.pow(n, 0.5);

    if (pow % 1 === 0) {
        return Math.pow(pow + 1, 2);
    }

    return -1;
}