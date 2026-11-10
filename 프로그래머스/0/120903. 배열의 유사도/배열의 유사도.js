function solution(s1, s2) {
    let answer = 0;
    let s1_al = '';
    let s2_al = '';
    
  
        for (let i = 0; i < s1.length; i++) {
            s1_al = s1[i];
            for (let j = 0; j < s2.length; j++) {
                s2_al = s2[j];
                if (s1_al === s2_al) { answer++ }
            }
        }
    
    return answer;
}