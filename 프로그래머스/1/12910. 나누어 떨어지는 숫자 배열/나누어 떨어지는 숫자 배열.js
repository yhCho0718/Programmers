function solution(arr, divisor) {
    let answer = [];

    arr.forEach((number) => {
        if (number % divisor === 0) {
            answer.push(number)
        }
    })
    answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => (a - b))
    
    return answer;
}