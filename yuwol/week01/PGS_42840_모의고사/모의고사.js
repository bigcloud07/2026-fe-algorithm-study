function solution(answers) {
  const solvedCount = {
    1: 0,
    2: 0,
    3: 0,
  };

  const arrTemplate = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < arrTemplate.length; j++) {
      const currArr = arrTemplate[j];
      const elIdx = i % currArr.length;

      if (answers[i] === currArr[elIdx]) solvedCount[String(j + 1)]++;
    }
  }

  return getMax(solvedCount);
}

function getMax(obj) {
  let result = [];
  let max = -999;

  for (const [key, value] of Object.entries(obj)) {
    if (value > max) {
      result = [];
      max = value;
      result.push(key);
    } else if (value === max) {
      result.push(key);
    }
  }

  return result.map(Number);
}
