function solution(n) {
    let answer = 0;
    let num = 0;

    // n % a === 0 이면, a를 출력한다.
    for (num = 1; num <= n; num++) {
        if (n % num === 0) {
            answer++;
        }
    }
    
    return answer;
}