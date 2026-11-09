function solution(n, k) {
    let answer = 0;
    let result = 0; // 서비스로 나가는 음료 개수
    
    result = Math.trunc((n / 10));
    // 2000(k - result) = 음료값
  
    answer = (12000 * n) + (2000 * (k - result));
    return answer;
}