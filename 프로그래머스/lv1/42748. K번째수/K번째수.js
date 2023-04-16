function solution(array, commands) {
    var answer = [];
    for(let a=0; a < commands.length; a++){
        let i = commands[a][0]-1
        let j = commands[a][1]
        let k = commands[a][2] -1
        let slice = array.slice(i,j);
        slice.sort((a,b)=>a-b)
        answer.push(slice[k])
    }
    
    
    return answer;
}