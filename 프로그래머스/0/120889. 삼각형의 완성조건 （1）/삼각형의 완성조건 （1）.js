function solution(sides) {
    let answer = 0;
    let number = Math.max(...sides);
    let nokori = 0;

    for(let i = 0; i < sides.length; i++) {
        sides.sort((a, b) => (a - b))
        // if(sides[2] < sides[0] + sides[1]) {
        //     answer = 1;
        // } else {
        //     answer = 2;
        // }
        sides[2] < sides[0] + sides[1] ? answer = 1 : answer = 2
    }
    return answer;
}