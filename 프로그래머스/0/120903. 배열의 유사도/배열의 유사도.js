function solution(s1, s2) {
    let answer = 0;
        for (let i = 0; i < s1.length; i++) {
            for (let j = 0; j < s2.length; j++) {
                if (s1[i] === s2[j]) { answer++ }
            }
        }
    return answer;
    
//     let answer = '';

//     for (let i = 1; i <= 5; i++) {   
//         for (let j = 1; j <= i; j++) {
//             answer += '*';
//         }
//         answer += '\n';
//     } 
//     return answer;

    // for (let k = 1; k <= 5; k++) {
    //     answer += '*';
    //     console.log(answer)
    // }
}
