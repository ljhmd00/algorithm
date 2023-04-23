function solution(money) {
answer = '';
let cups = Math.floor(money / 5500);
let remainMoney = money - (cups * 5500);
return answer = [cups, remainMoney];
}