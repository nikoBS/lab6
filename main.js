function TaskOne() {
    for (let i = 0; i < 3; i++) {
        console.log("Hello, World!");
    }
}

function TaskTwo(length, width) {
    return 2*length + 2*width;
}

function TaskThree(radius) {
    return (radius*radius)*3.14;
}

function TaskFour(name) {
    return "Hi, " + name + "!";
}

function TaskFive(a, b) {
    return a/b;
}

function TaskSix(a, b) {
    return a*a + b*b;
}

function TaskSeven(a, b, c) {
    return a*b*c;
}

function TaskEight(dollars) {
    let TengeInADollar = 445.26;
    return dollars * TengeInADollar;
}

function TaskNine(number) {
    if (number > 0) return "Positive";
    else return "Negative";
}

function TaskTen(a, b) {
    if (a == b) return true;
    else return false;
}

function TaskEleven(number) {
    if (number % 2) return "Odd";
    else return "Even";
}

function TaskTwelve(number) {
    if (number > 0 && number < 1) return true;
    else return false;
}

function TaskThirteen(a, b) {
    if (a > b) return a;
    else return b;
}

function TaskFourteen(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else if (c > a && c > b) return c;
}

function TaskFifteen(number) {
    if (number == 1) return "Monday";
    else if (number == 2) return "Tuesday";
    else if (number == 3) return "Wednesday";
    else if (number == 4) return "Thursday";
    else if (number == 5) return "Friday";
    else if (number == 6) return "Saturday";
    else if (number == 7) return "Sunday";
    else return "Number should be between 1 and 7";
}

console.log("\nTask One / Print Hello World three times: ");
TaskOne();
console.log("\nTask Two / Perimeter (3, 4): \n" + TaskTwo(3, 4));
console.log("\nTask Three / Circle Area (11): \n" + TaskThree(11));
console.log('\nTask Four / Greet ("John"): \n' + TaskFour("John"));
console.log("\nTask Five / Ratio (60, 12): \n" + TaskFive(60, 12));
console.log("\nTask Six / Sum of squares (5, 6): \n" + TaskSix(5, 6));
console.log("\nTask Seven / Product of three numbers (3, 4, 5): \n" + TaskSeven(3, 4, 5));
console.log("\nTask Eight / Dollar to Tenge (55.67): \n" + TaskEight(55.67));
console.log("\nTask Nine / Positive or Negative (5): \n" + TaskNine(5));
console.log("\nTask Ten / Equality (10, 5): \n" + TaskTen(10, 5));
console.log("\nTask Eleven / Even or odd (11): \n" + TaskEleven(11));
console.log("\nTask Twelve / Between 0 and 1 (0.5432): \n" + TaskTwelve(0.5432));
console.log("\nTask Thirteen / Greatest among two (10, 5): \n" + TaskThirteen(10, 5));
console.log("\nTask Fourteen / Greatest among three (10, 5, 17): \n" + TaskFourteen(10, 5, 17));
console.log("\nTask Fifteen / Day of the week (3): \n" + TaskFifteen(3));






