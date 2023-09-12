/*BUỔI 01, 02: -JAVASCRIPT FUNDAMENTALS*/

// Coding Challenge #1
console.log("Coding Challenge #1");
/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).*/
// Your tasks:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// 1. Store Mark's and John's mass and height in variables
let marksMass1 = 78
let marksHeight1 = 1.69

let joihnsMass1 = 92
let joihnsHeight1 = 1.95
    // 2. Calculate both their BMIs using the formula (you can even implement both versions)
let marksBMI1 = marksMass1 / marksHeight1 ** 2
let johnsBMI1 = joihnsMass1 / joihnsHeight1 ** 2
    // 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI1 = marksBMI1 > johnsBMI1

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
let marksMass2 = 95
let marksHeight2 = 1.88

let joihnsMass2 = 85
let joihnsHeight2 = 1.76
    // 2. Calculate both their BMIs using the formula (you can even implement both versions)
let marksBMI2 = marksMass2 / marksHeight2 ** 2
let johnsBMI2 = joihnsMass2 / joihnsHeight2 ** 2
    // 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI2 = marksBMI2 > johnsBMI2

// Coding Challenge #1
console.log("Coding Challenge #2");
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
/*1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"*/
console.log("Task1 : ");
let functionChallenge2Task1 = (markHigherBMI) => {
    if (markHigherBMI) {
        console.log("Mark's BMI is higher than John's!");
    } else {
        console.log("John's BMI is higher than Mark's!");
    }
}
functionChallenge2Task1(markHigherBMI1)
functionChallenge2Task1(markHigherBMI2)
    /*2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
    BMI (28.3) is higher than John's (23.9)!"*/
console.log("Task 2 : ");
let functionChallenge2Task2 = (marksBMI, johnsBMI, markHigherBMI) => {
    if (markHigherBMI) {
        console.log(`Mark's BMI (${marksBMI.toFixed(1)}) is higher than John's (${johnsBMI.toFixed(1)})!`);
    } else {
        console.log(`John's BMI (${johnsBMI.toFixed(1)}) is higher than Mark's (${marksBMI.toFixed(1)})!`);
    }
}
functionChallenge2Task2(marksBMI1, johnsBMI1, markHigherBMI1)
functionChallenge2Task2(marksBMI2, johnsBMI2, markHigherBMI2)

// Coding Challenge #3
console.log("Coding Challenge #3");
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!*/
// Your tasks:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// 1. Calculate the average score for each team, using the test data below
let dolphinsScores = [96, 108, 89]
let koalasScores = [88, 91, 110]

let dolphinsAverageScores = dolphinsScores.reduce((total, score) => {
    return total + score
}, 0) / dolphinsScores.length

let koalasAverageScores = koalasScores.reduce((total, score) => {
        return total + score
    }, 0) / dolphinsScores.length
    /*2. Compare the teams average scores to determine the winner of the competition,
    and print it to the console. Dont forget that there can be a draw, so test for that
    as well (draw means they have the same average score)*/
console.log("Task 2 : ");
let functionChallenge3Task2 = (dolphinsAverageScores, koalasAverageScores) => {
    if (dolphinsAverageScores > koalasAverageScores) {
        console.log("Team Dolphins is the winner!");
    } else if (dolphinsAverageScores < koalasAverageScores) {
        console.log("Team Koalas is the winner!");
    } else {
        console.log("Result is a draw");
    }
}
functionChallenge3Task2(dolphinsAverageScores, koalasAverageScores)
    /*3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a
    score of at least 100 points. Hint: Use a logical operator to test for minimum
    score, as well as multiple else-if blocks*/
    // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
console.log("Task 3 :");
let dolphinsScoresBonus1 = [97, 112, 101]
let koalasScoresBonus1 = [109, 95, 123]

let dolphinsAverageScoresBonus1 = dolphinsScoresBonus1.reduce((total, score) => {
    return total + score
}, 0) / dolphinsScores.length

let koalasAverageScoresBonus1 = koalasScoresBonus1.reduce((total, score) => {
    return total + score
}, 0) / dolphinsScores.length

let functionChallenge3Task3 = (dolphinsAverageScores, koalasAverageScores) => {
    if (dolphinsAverageScores > koalasAverageScores && dolphinsAverageScores >= 100) {
        console.log("Team Dolphins is the winner!");
    } else if (dolphinsAverageScores < koalasAverageScores && koalasAverageScores >= 100) {
        console.log("Team Koalas is the winner!");
    } else {
        console.log("Result is a draw");
    }
}
functionChallenge3Task3(dolphinsAverageScoresBonus1, koalasAverageScoresBonus1)

/*4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy*/
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
console.log("Task 4 : ");
let dolphinsScoresBonus2 = [97, 112, 101]
let koalasScoresBonus2 = [109, 95, 106]

let dolphinsAverageScoresBonus2 = dolphinsScoresBonus2.reduce((total, score) => {
    return total + score
}, 0) / dolphinsScores.length

let koalasAverageScoresBonus2 = koalasScoresBonus2.reduce((total, score) => {
    return total + score
}, 0) / dolphinsScores.length

let functionChallenge3Task4 = (dolphinsAverageScores, koalasAverageScores) => {
    if (dolphinsAverageScores > koalasAverageScores && dolphinsAverageScores >= 100) {
        console.log("Team Dolphins is the winner!");
    } else if (dolphinsAverageScores < koalasAverageScores && koalasAverageScores >= 100) {
        console.log("Team Koalas is the winner!");
    } else if (dolphinsAverageScores === koalasAverageScores && dolphinsAverageScores >= 100 && koalasAverageScores >= 100) {
        console.log("Result is a draw");
    } else {
        console.log("No team wins the trophy");
    }
}
functionChallenge3Task4(dolphinsAverageScoresBonus2, koalasAverageScoresBonus2)

// Coding Challenge #4
console.log("Coding Challenge #4");
/*Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.*/
// Your tasks:
/*1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement  (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)*/
// § Data 1: Test for bill values 275, 40 and 430
let calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
let tipOfBillsValue275 = calculateTip(275)
let tipOfBillsValue40 = calculateTip(40)
let tipOfBillsValue430 = calculateTip(430)
    /*2. Print a string to the console containing the bill value, the tip, and the final value
    (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
    316.25”*/
console.log("Task 2 : ");
let functionChallenge4Task2 = (bill) => {
    let tipOfBillsValue = calculateTip(bill)
    console.log(`The bill was ${bill}, the tip was ${tipOfBillsValue}, and the total value ${bill + tipOfBillsValue}`);
}
functionChallenge4Task2(275)
functionChallenge4Task2(40)
functionChallenge4Task2(430)

// Coding Challenge #5
console.log("Coding Challenge #5");
/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!*/
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
let calcAverage = (scores) => {
        return scores.reduce((total, score) => total + score, 0) / scores.length
    }
    // 2. Use the function to calculate the average for both teams
    // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
let dolphinScores1 = [44, 23, 71]
let koalaScores1 = [65, 54, 49]

let averageOfDolphin1 = calcAverage(dolphinScores1)
let averageOfKoala1 = calcAverage(koalaScores1)
    // § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
let dolphinScores2 = [85, 54, 41]
let koalaScores2 = [23, 34, 27]

let averageOfDolphin2 = calcAverage(dolphinScores2)
let averageOfKoala2 = calcAverage(koalaScores2)
    /*3. Create a function 'checkWinner' that takes the average score of each team
    // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
    // to the console, together with the victory points, according to the rule above.
    // Example: "Koalas win (30 vs. 13)"*/
let checkWinner = (avgDolphins, avgKoalas) => {
        (avgDolphins >= avgKoalas * 2) ?
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`): (
            (avgKoalas >= avgDolphins * 2) ?
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`) :
            console.log("No team wins!")
        )
    }
    // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log("Task 4 : ");
checkWinner(averageOfDolphin1, averageOfKoala1)
checkWinner(averageOfDolphin2, averageOfKoala2)
    // 5. Ignore draws this time

// Coding Challenge #6
console.log("Coding Challenge #6");
/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:*/
/*1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100*/
console.log("Task 1 : ");
let calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
console.log("Tip : " + calcTip(100));
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// Test data: 125, 555 and 44
let bills = [125, 555, 44]
console.log(`bills : ${bills}`);
/*3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before*/
let tips = bills.map(bill => calcTip(bill))
console.log(`tips : ${tips}`);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
let total = bills.map(bill => bill + calcTip(bill))
console.log(`total : ${total}`);

// Coding Challenge #7
console.log("Coding Challenge #7");
/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)*/
// Your tasks:
/*1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)*/
/*2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method*/
/*3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"*/
let mark = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,
    calcBMI: () => this.mass / this.height ** 2
}

let john = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    calcBMI: () => this.mass / this.height ** 2
}


console.log("Task 3 : ");
if (mark.calcBMI > john.calcBMI) {
    console.log(`Mark's BMI (${mark.calcBMI}) is higher than John's (${john.calcBMI})!`);
} else {
    console.log(`John's BMI (${john.calcBMI}) is higher than Mark's (${mark.calcBMI})!`);
}