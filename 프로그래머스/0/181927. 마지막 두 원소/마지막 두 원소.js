function solution(num_list) {
    let answer = [];
    let str = ''

    for (let i = 0; i < num_list.length; i++) {
        (num_list[(num_list.length - 1)]) > (num_list[(num_list.length - 2)]) ?
          str = ((num_list[(num_list.length - 1)]) - (num_list[(num_list.length - 2)])) :
       str =  ((num_list[(num_list.length - 1)]) * 2)
    }
    num_list.push(str)
    answer = num_list
    return answer;
}