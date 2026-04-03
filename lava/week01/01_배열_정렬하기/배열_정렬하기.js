function mySort(arr) {
    // sort 내장 함수를 사용하면 n ln n으로 쉽게 해결할 수 있지만,
    // 단원이 배열인 만큼 배열을 직접 다루는 것을 익히는 시간이 필요할 것 같아
    // 가장 떠올리기 쉬운 버블 정렬을 활용하여 mySort 구현
    // 시간 복잡도 N^2
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(mySort([2, 1, 1, 3, 2, 5, 4]));
console.log(mySort([1, -5, 2, 4, 3]));
console.log(mySort([6, 1, 7]));

console.log([2, 1, 1, 3, 2, 5, 4].sort((a, b) => a - b));
