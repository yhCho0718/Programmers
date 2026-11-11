function solution(n, numlist) {
    let answer = [];

//     for (let i = 0; i < numlist.length; i++) {   
//        numlist[i] % n === 0 ? answer.push(numlist[i]) : ''
//     }
    numlist.forEach((number) => {
        // if (number % n === 0) {
        //     answer.push(number) 
        // }
        number % n === 0 ? answer.push(number) : ''
    })
    return answer;
}