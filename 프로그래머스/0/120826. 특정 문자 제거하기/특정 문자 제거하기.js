function solution(my_string, letter) {
    let answer = '';
    
    // 문자열을 하나씩 출력한다음
    // letter에 해당하는 문자를 제외하고 문자열로 불러온다.
    for (let i = 0; i < my_string.length; i++) {
        let str = '';
        let s;
        str = my_string[i];
        console.log(str)
        
        answer += str.replace(letter, "");

    }

    return answer;
}