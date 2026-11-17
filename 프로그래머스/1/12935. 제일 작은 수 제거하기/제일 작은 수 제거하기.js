function solution(arr) {
    if (arr.length === 1) { return [-1] }
    
    let min = arr[0]
    let found = 0
    
    arr.forEach((number, index) => {
        if (number < min) {
            min = number
            found = index
        }
    })
    
    let a = [...arr].slice(0, found)
    let b = [...arr].slice(found + 1, arr.length)
    const answer = [...a, ...b]

    return answer;
}