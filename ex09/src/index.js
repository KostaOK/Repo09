function logicalAndOperator(num) {
    if (num < 20 || num > 30) {
        return "Out";
    }
    return "In";
}

console.log(logicalAndOperator(0));
console.log(logicalAndOperator(9));
console.log(logicalAndOperator(20));
console.log(logicalAndOperator(23));
console.log(logicalAndOperator(30));
console.log(logicalAndOperator(31));
console.log(logicalAndOperator(105));

module.exports = logicalAndOperator;