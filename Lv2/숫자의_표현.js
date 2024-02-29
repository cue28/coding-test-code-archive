function solution(n) {
  let count = 0;
  for (let start = 1; start <= n; start++) {
    let sum = 0;
    for (let end = start; sum < n; end++) {
      sum += end;
      if (sum === n) {
        count++;
        break;
      }
    }
  }
  return count;
}
