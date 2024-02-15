//베스트엘범
// 1. 같은 장르끼리 묶기
// 2. 묶인 노래들을 재생 순으로 정렬
// 3. 노래를 2개까지 자르는 작업

// 핵심 키워드: 묶는 것, 정렬

function solution(genres, plays) {
  const genresMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genresMap.get(genre) || { total: 0, songs: [] };
      genresMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genresMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);

  // 해시 테이블 만들고 전사..
  //     const hashTable = {};

  //     for (let i = 0; i < genres.length; i ++) {
  //         if (hashTable[genres[i]]) {
  //             hashTable[genres[i]] = {
  //                 ...hashTable[genres[i]],
  //                 total : hashTable[genres[i]].total + plays[i],
  //                 [i]: plays[i]
  //             }
  //         } else {
  //           hashTable[genres[i]] = { total : plays[i], [i]: plays[i] };
  //         }
  //     }

  //     console.log(hashTable)
  //     const genresList = Object.keys(hashTable).map(el => hashTable[el].total);
  //     console.log(genresList)
}
