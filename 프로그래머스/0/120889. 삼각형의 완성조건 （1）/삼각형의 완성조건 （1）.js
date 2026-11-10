function solution(sides) {
    let answer = 0;
    let number = Math.max(...sides);
    let nokori = 0;

    // //이건 이등변 삼각형일 때, 에러남
    // for (let i = 0; i < sides.length; i++) {
    //     if (sides[i] !== number) {
    //         nokori += sides[i]; 
    //     }   
    // }

    // 그럼 배열을 오름차순 정렬을 해서
    // sides[2] < sides[0] + sides[1]
    for(let i = 0; i < sides.length; i++) {
        sides.sort((a, b) => (a - b))
        // console.log(sides[i])
       if(sides[2] < sides[0] + sides[1]) {
           answer = 1;
       } else {
            answer = 2;
       }
    }
    
  
   
    // (number < nokori) ? answer = 1 : answer = 2;
    
    return answer;
}