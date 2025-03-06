const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (input) => {
    const num = Number(input);

    let color = null;

    if (num >= 620 && num <= 780) {
        color = "Red";
    } else if (num >= 590 && num < 620) {
        color = "Orange";
    } else if (num >= 570 && num < 590) {
        color = "Yellow";
    } else if (num >= 495 && num < 570) {
        color = "Green";
    } else if (num >= 450 && num < 495) {
        color = "Blue";
    } else if (num >= 425 && num < 450) {
        color = "Indigo";
    } else if (num >= 380 && num < 425) {
        color = "Violet";
    } else {
        console.log("주어진 값이 없습니다.");
        rl.close();
        return;
    }

    console.log(`${color}`);
    rl.close();
});
