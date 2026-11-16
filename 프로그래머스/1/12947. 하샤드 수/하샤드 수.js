function solution(x) {
    let answer = true;
    let sum = 0;
    let n = x;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return x % sum === 0 ? answer : !answer;
}