function solution(phone_number) {
    let answer = '';
    let front = '';
    let back = '';
    let phone = '';
    
    for(let i = 0; i < phone_number.length - 4; i++) {
        phone += (phone_number[i])   
        front += phone.replace(phone, '*')
    }
 
    for(let j = phone_number.length - 4; j < phone_number.length; j++) {
        back += phone_number[j]
        
    }
    answer = front + back
    return answer;
}