function solution(my_string) {
    let answer = '';

    for(let i = 0; i < my_string.length; i ++) {
        let word = '';
        word = my_string[i];
        
        switch (word){
            case 'a':
                continue
            case 'e':
                continue
            case 'i':
                continue
            case 'o':
                continue
            case 'u':
                continue
            default:
                answer += word
        }
    }
    
    return answer;
}