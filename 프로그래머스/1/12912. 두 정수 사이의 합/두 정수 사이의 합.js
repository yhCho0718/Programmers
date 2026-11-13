function solution(a, b) {
    let answer = 0;
    let min = 0;
    let max = 0;
    
    if (a > b) {
        max = a;
        min = b;
    } else if (a < b) {
        max = b;
        min = a;
    } else if (a = b) {
        answer = a;
    }
    for (let i = min; i <= max; i++) {
        answer += i
    }
    return answer;
}