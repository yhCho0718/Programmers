function solution(numbers) {
    let sum = 0;

    numbers.forEach((number) => {
        sum += number
    })

    return 45 - sum;
}