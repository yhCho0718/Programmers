function solution(n) {
    let answer = 0;
    
     while (n > 0) {
         // // 방법 1.
         // head = n % 10
         // answer += head
         // const modedN = n - head
         // n = modedN / 10
         
         // 방법 2.
         answer += n % 10;  
         n = Math.floor(n / 10);
     }
    return answer;
}