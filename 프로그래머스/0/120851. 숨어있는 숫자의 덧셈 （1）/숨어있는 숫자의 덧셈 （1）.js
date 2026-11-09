function solution(my_string) {
    let answer = 0;

    // Number.isNaN을 쓰면 true인지 false인지 돌려줄 수 있다
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (Number(my_string[i]) === j) {
                answer += j
            }
        }
    }
    return answer;
}