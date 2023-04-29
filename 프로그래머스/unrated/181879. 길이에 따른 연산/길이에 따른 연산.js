function solution(num_list) {
    var answer = 0;
    let sum = 1;
    for(let i = 0; i < num_list.length; i++){
        if(num_list.length >= 11){
            answer = answer + num_list[i]
        }else {
            sum *= num_list[i];
            answer = sum;
        }
    }
    return answer;
}