function solution(n) {
    let answer = [];
    
    while (n > 0) {
        let head = n % 10;
        answer.push(head);
        let mod = n - head;
        n = mod / 10;
    }
    
    return answer;
}