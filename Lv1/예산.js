function solution(d, budget) {
  // 최대한 많이
  const sorted = d.sort((a, b) => a - b);

  let count = 0;

  for (const department of sorted) {
    if (department > budget) {
      break;
    }

    budget -= department;
    count += 1;
  }

  return count;
}
