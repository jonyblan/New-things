const CANT_ELEMS = 2;

function sum(x, y) {
    return x + y;
}

function main() {
    let numbers = [];
    let answer = 0;

    // Input loop
    for (let i = 0; i < CANT_ELEMS; ++i) {
        const element = parseInt(prompt(`Enter element ${i + 1}:`));
        numbers.push(element);
        answer = sum(answer, element);
    }

    // Output
    console.log("Sum:", answer);
}

main();