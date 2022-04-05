function compareDifferentValues(m) {
    if (m != 55) {
        return "Not equal";
    }
    return "Equal";
}
console.log(compareDifferentValues(55));
console.log(compareDifferentValues("55"));
console.log(compareDifferentValues("21"));
console.log(compareDifferentValues(12));
console.log(compareDifferentValues("Doe"));

module.exports = compareDifferentValues;