function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber;

    }
randomRangeNumber(3, 11);
console.log(randomRangeNumber(3, 11));

module.exports = randomRangeNumber;