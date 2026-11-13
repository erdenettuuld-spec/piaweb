console.log("JavaScript холбогдлоо!");
const PI= 3.14;

let score = 0;
score = 10;
score += 5; 
console.log(score)

const name = "Сараа";
const age = 20;
const msg= `${name} ${age} настай`;
console.log(msg);

function getGrade(score){
    if(score >= 90) {
        return "A";
    } else if(score >= 80){
        return "B";
    }else if(score >= 70){
        return "C";
    }else {
        return "F";
    }
}
const isPassed = (score) => {
    return score >= 70;
}
let passed=0;
for(let score=50; score<=100; score+=10){
    let grade= getGrade(score);
    let passedStatus=isPassed(score) ? "тэнцсэн": "тэнцээгүй";
    if(isPassed(score)){
        passed++;
    }
    console.log(`Оноо: ${score}-${grade} (${passedStatus})`);
}
console.log(`Тэнцсэн: ${passed}`);