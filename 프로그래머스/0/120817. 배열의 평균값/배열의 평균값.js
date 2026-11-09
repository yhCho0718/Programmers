function solution(numbers) {
    var answer = 0;
    let arr = 0;
    let sum = 0;
    let n;

    n = numbers.length;
//     배열 안에 있는 값을 더한 다음, 더해진 수의 갯수로 나눠서 평균을 구한다.   

    for (let i = 0; i < n; i++) {
        arr = numbers[i]
        sum += arr;
    }

    answer = sum / n;
    return answer;
}