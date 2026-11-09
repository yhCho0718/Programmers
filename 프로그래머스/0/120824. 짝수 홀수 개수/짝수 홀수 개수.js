function solution(num_list) {
//     let answer = [0, 0];
//     let even = 0;
//     let odd = 0;

//     // 배열의 0번째 원소를 가져와서 number에 넣어준다.
//     // number % 2를 해서 number가 짝수인지, 홀수 인지 판단
//     // 짝수의 갯수를 구해서 even에, 홀수의 갯수를 구해서 odd에 넣어준다
//     // even, odd를 answer배열값으로 넣어준다
//     num_list.forEach((number) => {
//         number % 2 === 0 ? even++ : odd++
//     })
//     answer = [even, odd];
    let answer = [];
    let even = [];
    let odd = [];
    
    for (let i = 0; i < num_list.length; i++) {
        let number = 0;
        number = num_list[i];
        if (number % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    answer.push(even.length, odd.length);
    return answer;
}