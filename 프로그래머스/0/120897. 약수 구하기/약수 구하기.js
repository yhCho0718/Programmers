function solution(n) {
    let answer = [];
    let number = 0;
    
    for(let i = 1; i < n + 1; i++) {
        n % i === 0 ? answer.push(i) : console.log("false")
    }
    
    return answer;
}