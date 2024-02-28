function solution(arr, queries) {
  const answer = arr;

  for (const query of queries) {
    const i = query[0];
    const j = query[1];

    const arrI = arr[i];
    const arrJ = arr[j];

    arr[i] = arrJ;
    arr[j] = arrI;
  }

  return answer;
}
