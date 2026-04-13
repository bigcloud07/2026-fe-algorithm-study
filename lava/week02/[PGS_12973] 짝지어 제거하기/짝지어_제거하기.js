// 처음 시도한 방식(N^2) -> 배열 최대 길이가 100만개라 시간 초과 가능성
// function solution(s) {
//     s = s.split('');
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 1; j < s.length; j++) {
//             if (s[j] === s[j - 1]) {
//                 s.splice(j - 1, 2);
//                 j = j - 2;
//             }
//         }
//     }
//     return s.length ? 0 : 1;
// }

// stack 단원이 아니라면 힌트를 얻기 어려웠을 것 같긴 하지만
// 다른 배열을 하나 만들고, j, j+1을 비교하고 다르면 j를 다른 배열에 넣어둠
// 넣은 이후에 그 배열에서도 다시 검사
// 근데 코드 짜보니 이 방법도 배열 2개 만들어서 이중 반복 돌려야됨

// stack을 만들고 원본 배열의 [0]를 stack에 넣어둠
// stack.pop이랑 s[0]이랑 같지 않으면 stack.push(s[0])
// stack.pop이랑 s[0]이랑 같으면 stack.pop, s.splice(0,1);

function solution(s) {
    const stack = [];
    for (const char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length ? 0 : 1;
}
