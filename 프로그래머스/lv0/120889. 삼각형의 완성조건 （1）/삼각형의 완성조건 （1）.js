function solution(sides) {
    var answer = 0;
    
    sides.sort((a,b) => a-b)
    
    if(sides[0] + sides[1] > sides[2]){
        answer = 1;
    }else if(sides[0] + sides[1] <= sides[2]){
        answer = 2;
    }
    return answer;
}