function solution(arr1, arr2) {
    // 어떤 인덱스로 배열을 순회해야할지 바로 감이 오지 않는데
    // arr1, arr2의 인덱스 보다는 arr1, arr2의 행, 열에 따른 곱 연산 이후 생기는 결과물의 형태를 보고 결정
    // 행렬 곱은 왼쪽의 세로줄 개수 === 오른쪽 가로줄 개수가 같아야 연산 가능
    // 결과물은 왼쪽의 가로줄 개수 x 오른쪽의 세로줄 개수
    // 결과물 0,0의 값은 왼:[0,0~n] * 오:[0~m,0]
    // 결과물 0,1의 값은 왼:[0,0~n] * 오:[0~m,1]
    // 정리하면 결과물의 x : 왼의 x
    // 결과물의 y : 오의 y
    // 빼고 전부 순회
    const length = arr1.length;
    const resultX = arr2[0].length; // 결과의 세로줄 개수
    const resultY = length; // 결과의 가로줄 개수
    const answer = Array.from({ length: resultY }, () => Array(resultX).fill(0));
    let tmp = 0;

    for (let i = 0; i < resultY; i++) {
        for (let j = 0; j < resultX; j++) {
            tmp = 0;
            for (let k = 0; k < arr1[0].length; k++) {
                tmp += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = tmp;
        }
    }

    return answer;
}
// 처음에는 이렇게 각각 인덱스를 순회하며 모든 조합을 곱하는 방식으로 했다가 수정
// for (k = 0; k < arr1[0].length; k++) {
//     for (kk = 0; kk < arr2.length; kk++) {
//         tmp += arr1[i][k] * arr2[kk][j];
//     }
// }
