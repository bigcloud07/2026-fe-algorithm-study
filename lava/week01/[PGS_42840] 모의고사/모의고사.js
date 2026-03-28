function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    const score = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === patterns[0][i % patterns[0].length]) score[0] += 1;
        if (answers[i] === patterns[1][i % patterns[1].length]) score[1] += 1;
        if (answers[i] === patterns[2][i % patterns[2].length]) score[2] += 1;
    }
    const max = Math.max(...score);
    const answer = [];
    score.forEach((point, idx) => {
        console.log(point, max, point === max);
        if (point === max) answer.push(idx + 1);
    });
    return answer;
}
