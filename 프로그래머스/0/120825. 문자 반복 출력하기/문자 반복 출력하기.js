function solution(my_string, n) {
    let answer = '';

    // my_string에서 각 문자열을 출력한다
    // 문자를 n번씩 반복시켜 출력한다
    for (let i = 0; i < my_string.length; i++) {
        let str = '';
        str = my_string[i];

        for (let j = 0; j < n; j++) {
           answer += str;
        }

        // answer += str;
    }
    return answer;
}