function solution(money) {
    var answer = [];
    let cup = 0;
    let exchange = 0;

    
    cup = Math.trunc(money / 5500);
    exchange = money - (5500 * cup);

    answer.push(cup, exchange);
    return answer;
}