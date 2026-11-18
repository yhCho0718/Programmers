function solution(s) {
    let answer = '';
    let odd = 0;
    let mod = 0;
    for (let i = 0; i < s.length; i++) {
        odd = (s.length - 1) / 2 // 짝수
        mod = (s.length - 1) % 2 // 홀수
        if (mod !== 0) { 
            // console.log("odd: ", odd)
            // console.log("버림: ", Math.floor(odd))
            // console.log("올림: ", Math.ceil(odd))
            answer = s[Math.floor(odd)] + s[Math.ceil(odd)] 
        } else {
            // console.log("mod: ", mod)
            answer = s[odd]
        }
    }
    return answer;
}