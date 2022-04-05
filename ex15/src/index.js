function switchCase(letter) {
    switch (letter) {
        case "a":
            var answer = "antelope";
            break;
        case "b":
            var answer = "bird";
            break;
        case "c":
            var answer = "cat";
            break;
        default:
            var answer = "stuff";
            break;
    }
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));