function solution(numbers) {
    var answer = '';
    let arr = numbers.map((num) => num.toString())
    arr.sort((a,b)=>(b+a)-(a+b))
    answer =arr.join("")
    return answer[0] ==='0' ? '0' : answer;
}