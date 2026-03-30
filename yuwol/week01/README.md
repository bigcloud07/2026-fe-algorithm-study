## 시간 복잡도 구하기

### 01\_배열 정렬하기

**배열 대표 고차함수 시간 복잡도**

- map, filter, forEach, reduce 등: `O(N)`
- sort: `O(N * log N)`

데이터의 최대 개수 : N = 10 ^ 5 (10만 개)

**시간 복잡도 계산**

```text
(10 ^ 5) \* log2 (10 ^ 5)
= 10만 \* 5 \* log2 (10)
= 50만 * 3.3xx
= 약 160만
```

### 02\_배열 정렬하기

`Set` 객체는 해시 알고리즘으로 데이터를 저장하므로 시간 복잡도 `O(N)`을 보장한다.

**시간 복잡도 계산**

```js
function solution(arr) {
  return [...new Set(arr)] // O(N)
    .sort((a, b) => b - a); // O(NlogN)
}

// 최종 시간 복잡도: N + NlogN => O(NlogN)
```

### PGS_68644\_두 개 뽑아서 더하기

```js
function solution(numbers) {
  const answers = [];
  // 중첩 for문 -> O(N^2)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) break;
      const sum = numbers[i] + numbers[j];
      answers.push(sum);
    }
  }

  return [...new Set(answers)] // O(N^2)
    .sort((a, b) => a - b); // O(N^2 logN^2) = O(N^2 2logN) = O(N^2 logN)

  // 최종 시간 복잡도: O(N^2 logN) = 1만 * log100
}
```

### PGS_42840\_모의고사

```js
for (let i = 0; i < answers.length; i++) {  // O(N)
    for (let j = 0; j < arrTemplate.length; j++) {  // O(1)

...

function getMax(obj) {
  for (const [key, value] of Object.entries(obj)) {  // O(1)


// 최종 시간 복잡도: O(1)
```
