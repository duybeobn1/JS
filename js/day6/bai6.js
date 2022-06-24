function sortGrade(name, point) {
    if (point >= 0 && point < 40) {
        console.log(`${name} is faied with ${point} points`);
    }
    else if (point >= 40 && point < 50) {
        console.log(`${name} got a E with ${point} points`);
    }
    else if (point >= 50 && point < 60) {
        console.log(`${name} got a D with ${point} points`);
    }
    else if (point >= 60 && point < 70) {
        console.log(`${name} got a C with ${point} points`);
    }
    else if (point >= 70 && point < 80) {
        console.log(`${name} got a B with ${point} points`);
    }
    else if (point >= 80 && point < 90) {
        console.log(`${name} got a A with ${point} points`);
    }
    else if (point >= 90 && point <= 100) {
        console.log(`${name} got a S with ${point} points`);
    }
}
sortGrade('X', Math.floor(Math.random() * 101));
