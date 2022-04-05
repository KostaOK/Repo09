function myDoWhile() {
    var myNumber = "";
    for (var i = 0; i <= 9; i=i+1) {
        if (i == 9) {
        } else {
            myNumber = myNumber + i + ",";
        }
    }return myNumber;
}
module.exports = myDoWhile;