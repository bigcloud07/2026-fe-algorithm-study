// 가로줄로 나와있으니 세로줄로 stack을 만들어서 moves의 항목마다 인덱스로 접근해서 pop 할 수 있으면 편하겠지만
// 이건 사람이 이해하기 편하게 만들려고 한거고 실제로는 굳이 새 stack 만들지 않고 board에서 직접 인덱스 접근해서 0으로 바꿔도 되지 않을까 생각했는데
// 0이 안 나올 때까지 조회하고 업데이트 하는 과정이 더 비쌀 것 같아서 그냥 세로줄 stack 만드는거로
// 가로줄로 나와있으니 세로줄로 stack을 만들어서 moves의 항목마다 인덱스로 접근해서 pop 할 수 있으면 편하겠지만
// 이건 사람이 이해하기 편하게 만들려고 한거고 실제로는 굳이 새 stack 만들지 않고 board에서 직접 인덱스 접근해서 0으로 바꿔도 되지 않을까 생각했는데
// 0이 안 나올 때까지 조회하고 업데이트 하는 과정이 더 비쌀 것 같아서 그냥 세로줄 stack 만드는거로
function solution(board, moves) {
    const row = board.length;
    const column = board[0].length;
    const newStack = [];
    for (let i = 0; i < column; i++) {
        let tmpStack = [];
        for (let j = 0; j < row; j++) {
            if (board[j][i] !== 0) {
                tmpStack.push(board[j][i]);
            }
        }
        tmpStack.reverse();
        newStack.push(tmpStack);
    }
    const movedStack = [];
    let removeCnt = 0;
    moves.forEach((moveIdx) => {
        const col = newStack[moveIdx - 1];
        if (!col.length) return;

        const picked = col.pop();

        if (movedStack[movedStack.length - 1] === picked) {
            movedStack.pop();
            removeCnt += 2;
        } else {
            movedStack.push(picked);
        }
    });

    var answer = removeCnt;
    return answer;
}
