function solution(sides) {
    // // #1
    // let answer = 0;
    // sides.sort((a, b) => (a - b));
    // sides[2] < sides[0] + sides[1] ? answer = 1 : answer = 2;
    // return answer;
    
    // // #2
    let max = -1
    let sum = 0
    // for (let i = 0; i < sides.length; i++) {
    //     if (sides[i] > max) { max = sides[i] }
    //     sum += sides[i]
    // }
        
    // #3
    sides.forEach((number) => {
        if (number > max) { max = number }
        sum += number
    })
    
    return sum - 2 * max > 0 ? 1 : 2
}