function solution(dot) {
    let answer = 0;
   
    const num1 = dot[0];
    const num2 = dot[1];
    // 배열의 0, 1 번째 자리의 수를 추출
    // 그 수 a,b를 각자, 0보다 작은지 큰지 검사

    if (num1 > 0 && num2 > 0) {
        answer = 1;
    } else if (num1 < 0 && num2 > 0) {
        answer = 2;
    } else if (num1 < 0 && num2 < 0) {
        answer = 3;
    } else {
        answer = 4;
    }

    return answer;
}