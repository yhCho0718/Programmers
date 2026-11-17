function solution(numbers) {
    let sum = 0;
    
//     for (let i = 0; i < numbers.length; i++) {
//          sum += numbers[i]
//     }
    
    numbers.forEach((number) => {
        sum += number
    })

    return 45 - sum;
}