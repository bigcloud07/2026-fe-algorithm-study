function solution(dirs) {
    let x = 0;
    let y = 0;
    var answer = 0;
    let visitedMap = new Map();
    dirs.split('').forEach((dir, index) => {
        switch (dir) {
            case 'U':
                if (y !== 5) {
                    if (!visitedMap.get(`${x},${y},${dir}`)) {
                        answer += 1;
                        console.log(x, y, 'U', index);
                    }
                    visitedMap.set(`${x},${y},${dir}`, true);
                    visitedMap.set(`${x},${y + 1},D`, true);
                    y += 1;
                }
                break;
            case 'D':
                if (y !== -5) {
                    if (!visitedMap.get(`${x},${y},${dir}`)) {
                        answer += 1;
                        console.log(x, y, 'D', index);
                    }
                    visitedMap.set(`${x},${y},${dir}`, true);
                    visitedMap.set(`${x},${y - 1},U`, true);
                    y -= 1;
                }
                break;
            case 'R':
                if (x !== 5) {
                    if (!visitedMap.get(`${x},${y},${dir}`)) {
                        answer += 1;
                        console.log(x, y, 'R', index);
                    }
                    visitedMap.set(`${x},${y},${dir}`, true);
                    visitedMap.set(`${x + 1},${y},L`, true);
                    x += 1;
                }
                break;
            case 'L':
                if (x !== -5) {
                    if (!visitedMap.get(`${x},${y},${dir}`)) {
                        answer += 1;
                        console.log(x, y, 'L', index);
                    }
                    visitedMap.set(`${x},${y},${dir}`, true);
                    visitedMap.set(`${x - 1},${y},R`, true);
                    x -= 1;
                }
                break;
        }
    });
    return answer;
}

console.log(solution('UUUUUUDR'));
