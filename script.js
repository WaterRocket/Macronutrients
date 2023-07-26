let BMR; 
let activityBMR;
let finalCalories; 

function calculate() {
    let gender = document.querySelector('input[name="gender"]:checked').value; 

    let goal = document.querySelector('input[name="goal"]:checked').value;

    let age = document.getElementById('ages').value

    let activity = document.querySelector('input[name="activity"]:checked').value;

    let height = document.getElementById('height').value;

    let weight = document.getElementById('weight').value; 







    if(gender==='male'){
        BMR = 664.7 + 13.75*weight + 5.003*height - 6.755*age; 
        console.log(BMR); 
    }else if(gender==='female'){
        BMR = 655.1 + 9.563*weight + 1.85*height - 4.676*age; 
    }
    console.log(BMR); 
    if(activity==='sedentary'){

    }else if(activity==='moderate'){
        BMR = BMR * 1.12; 
        console.log(activityBMR); 
    }else if(activity==='active'){
        BMR = BMR * 1.3; 
    }

    if(goal==='lose'){
        BMR = BMR*0.8; 
    }else if(goal==='maintain'){
        BMR = BMR*1;
        console.log(finalCalories);
    }else if(goal==='gain'){
        BMR = BMR*1.2; 
    }

    document.getElementById('calorieResults').innerHTML = `${Math.round(BMR)} calories/day`;
    document.getElementById('proteinResult').innerHTML = `${Math.round(BMR/33*2)}g`;
    document.getElementById('fatResult').innerHTML = `${Math.round(BMR/33)}g`;
    document.getElementById('carbResult').innerHTML = `${Math.round(BMR/33*4)}g`;
}

function updateAge(){
    document.getElementById('ageDesc').innerHTML = `I'm ${document.getElementById('ages').value} years old`;
}

function updateHeight(){
    document.getElementById('heightDesc').innerHTML = `I'm ${document.getElementById('height').value}cm tall`;
}

function updateWeight(){
    document.getElementById('weightDesc').innerHTML = `I currently weigh ${document.getElementById('weight').value}kg`;
}

const heightRange = document.getElementById('height'); 
const weightRange = document.getElementById('weight'); 
const ageRange = document.getElementById('ages'); 
const button = document.getElementById('calcButton');


button.addEventListener("click", calculate); 
ageRange.addEventListener('input', updateAge);
heightRange.addEventListener('input', updateHeight); 
weightRange.addEventListener('input', updateWeight);

