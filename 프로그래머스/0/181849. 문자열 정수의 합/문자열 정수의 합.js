function solution(num_str) {
    let answer = 0;
    let num = Number(num_str);

    for(let i = 0; i < num_str.length; i++) {
        answer += Number(num_str[i])
        // head = num % 10;
        // console.log("head: ", head)
        // answer += head;
        // let mod = num - head
        // num = mod / 10
    }
    return answer;
}