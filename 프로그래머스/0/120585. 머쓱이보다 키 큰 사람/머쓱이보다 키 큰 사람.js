function solution(array, height) {
    let answer = 0;
    array.forEach((number) => {
       number > height ? answer ++ : 0
    })
    return answer;
}