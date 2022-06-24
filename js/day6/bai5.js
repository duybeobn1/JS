function cal(x, y, op) {
    if (op == 'add') return console.log(`${x} + ${y} == ${x+y}`);
    if (op == 'substract') return console.log(`${x} - ${y} == ${x-y}`);
    if (op == 'multiply') return console.log(`${x} * ${y} == ${x*y}`);
    if (op == 'divide') return console.log(`${x} / ${y} == ${x/y}`);
    if (op == 'modulus') return console.log(`${x} % ${y} == ${x%y}`);

}
cal(78, 97, 'add');
cal(87, -99, 'substract');
cal(679, 5, 'multiply');
cal(54, 3, 'divide');
cal(223, 78, 'modulus');