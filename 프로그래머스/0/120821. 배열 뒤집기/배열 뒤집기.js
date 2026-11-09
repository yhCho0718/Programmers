function solution(num_list) {
    var answer = [];
//     let arr = num_list.length;

//     // i를 배열의 갯수에서 1을 뺀 수부터 0까지 1씩 빼면서 그 안의 숫자를 가져온다.
//     // i가 0을 포함하여 0이 되면 for문을 나와 다음 줄이 실행된다.
//     // i가 0보다 작아지면 for문이 종료된다
//     // i가 0을 포함하여 크거나 같을 때까지 실행한다.
//     for (let i = arr - 1; i >= 0; i--) {
//        answer.push(num_list[i]);
//     }
    
    //[...num_list]: 원본의 요소들을 하나씩 펼쳐 놓은 것
    const num_list_copy = [...num_list] //원본의 복사본 생성
    
    for (let i = 0; i < num_list.length; i++) {
        answer.push(num_list_copy.pop()) //복사본의 맨 뒤 값을 꺼내서 answer에 추가
    }
    
    return answer;
}