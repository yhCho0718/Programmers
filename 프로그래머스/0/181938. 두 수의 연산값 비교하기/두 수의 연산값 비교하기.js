function solution(a, b) {
    let answer = 0;
    let c = ''; // a⊕b
    
    c = a.toString() + b.toString()

    answer = Number(c) >= (2 * a * b) ? Number(c) : (2 * a * b) 
    return answer;
}