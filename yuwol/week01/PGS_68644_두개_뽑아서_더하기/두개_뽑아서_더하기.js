function solution(numbers) {
  const answers = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) break;
      const sum = numbers[i] + numbers[j];
      answers.push(sum);
    }
  }

  return [...new Set(answers)].sort((a, b) => a - b);
}
