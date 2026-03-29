// function solution(N, stages) {
//     const clearMap = new Array(N + 2).fill(0);
//     const reachMap = new Array(N + 2).fill(0);
//     stages.forEach((stage) => {
//         if (stage <= N) clearMap[stage] += 1;
//         for (let j = 1; j <= Math.min(stage, N); j++) {
//             reachMap[j] += 1;
//         }
//     });
//     const failMap = new Array(N + 2).fill(-1);
//     for (let i = 1; i <= N; i++) {
//         if (reachMap[i] === 0) continue;
//         failMap[i] = clearMap[i] / reachMap[i];
//     }
//     var answer = [];
//     for (let k = 1; k <= N; k++) {
//         let maxFailRate = Math.max(...failMap);
//         if (maxFailRate === -1) break;
//         let index = failMap.indexOf(maxFailRate);
//         answer.push(index);
//         failMap[index] = -1;
//     }
//     return answer;
// }
// console.log(solution(1, [1])); // 기댓값: [1]
// console.log(solution(1, [2])); // 기댓값: [1] (전원 클리어)
// console.log(solution(2, [1, 1, 1, 1]));
// 처음 N의 존재를 알지 못하고 작성한 코드..
// 그래서 예제 케이스에서 첫번째는 6단계를 넣지 않고, 두번째는 4단계를 결과에 포함시키는 이유를 알지 못한 상태에서 결과대로 나오게 코드 작성했다가 예제는 성공했는데 제출에서 70% 실패했고 수정

function solution(N, stages) {
    const clearMap = new Array(N + 2).fill(0);
    const reachMap = new Array(N + 2).fill(0);
    stages.forEach((stage) => {
        if (stage <= N) clearMap[stage] += 1;
        for (let j = 1; j <= Math.min(stage, N); j++) {
            reachMap[j] += 1;
        }
    });
    const failRates = [];
    for (let i = 1; i <= N; i++) {
        const rate = reachMap[i] === 0 ? 0 : clearMap[i] / reachMap[i];
        failRates.push({ stage: i, rate });
    }
    failRates.sort((a, b) => {
        if (b.rate !== a.rate) return b.rate - a.rate;
        return a.stage - b.stage;
    });

    return failRates.map(({ stage }) => stage);
}
