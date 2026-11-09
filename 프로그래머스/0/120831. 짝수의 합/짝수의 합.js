function solution(n) {
    let answer = 0;
    // n % 2 === 0 이면 짝수
    // n 이하의 짝수를 어떻게 구하지?
    // n 이하의 수를 가지고 오는 것 부터 해결 = i
    for (let i = 1; i <= n; i ++) {
        console.log(i);
        if (i % 2 === 0) {
            answer += i
        }
       
    }
    return answer;
}