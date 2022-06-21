function calBmi(x, y) {
    return x / y ** 2;
}
var Mark = (78, 1.69);
var John = (92, 1.95);
var Marry = (95, 1.88);
var Harry = (85, 1.76);

//test 1
if (calBmi(Mark) == calBmi(John)) {
    console.log("Mark BMI is equal to John");
}
if (calBmi(Mark) > calBmi(John)) {
    console.log("Mark BMI is higher than John");
} else console.log("John BMI is higher than Mark");

//test 2
if (calBmi(Marry) == calBmi(Harry)) {
    console.log("Marry BMI is equal to Harry");
}
if (calBmi(Marry) > calBmi(Harry)) {
    console.log("Marry BMI is higher than Harry");
} else console.log("Harry BMI is higher than Marry");