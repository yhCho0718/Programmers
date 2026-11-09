function solution(numbers) {
    let answer = 0;
    let num1 = 0;
    let num2 = 0;

   
    // 배열을 오름차순으로 정리한다음
    // num1(numbers[n])과 num2(numbers[n-1])에 위치한 수를 출력한다
    // 그 자리에 위치한 수를 곱한다.
    numbers.sort((num1, num2) => num2 - num1);
    answer = numbers[0] * numbers[1]
    return answer;
}