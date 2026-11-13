function solution(n)
{
    let answer = 0;

    while (n > 0) {
        let head = n % 10;      
        answer += head;
        let mod = n - head;
        n = mod / 10;
    }
    return answer;
}