function solution(n) {
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        i % 2 !== 0 ? answer.push(i) : 0
    }

    // // answer.push(n).sort((a, b) => (a - b))
    return answer;
}