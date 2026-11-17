function solution(num) {
    let answer = 0;
    let cnt = 0;

    if (num === 1) { 
        answer = 0 
    } else {
        for (let i = 1; i <= 500; i++) {
            if (num % 2 === 0) {
                num = num / 2
                cnt++
                if (num === 1) { answer = cnt; break; }
            } else {
                num = (num * 3) + 1
                cnt++
                if (num === 1) { answer = cnt; break; }
            }
            // console.log("num: ", num)
            // console.log("cnt: ", cnt)
            if ((num !== 1) && (cnt === 500)) {
                answer = -1;
                break;
            }
        } 
    }
    
    return answer;
}