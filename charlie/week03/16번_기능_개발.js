function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    // 1. 한 턴당 각 speeds에 맞게 더해준다
    progresses = progresses.map((p, i) => p + speeds[i]);

    // 2. 첫번째가 100 이상인 순간, 앞에서부터 연속으로 100 이상인 것만 카운트
    if (progresses[0] >= 100) {
      let cnt = 0;
      while (progresses.length > 0 && progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        cnt++;
      }
      // 3. 개수를 answer에 푸쉬
      answer.push(cnt);
    }
    // 4. progresses.length === 0 이면 while이 자동으로 탈출
  }

  return answer;
}
