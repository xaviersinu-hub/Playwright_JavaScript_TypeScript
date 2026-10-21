let scores = [45, 82, 91, 60, 73];

let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);


// Filter
let passing = scores.filter(s => s >= 70);
console.log(passing);

//test
let passing1  = scores.map(s => s >= 70);
console.log(passing1);