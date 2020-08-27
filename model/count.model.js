class countModel {
    fizzBuzzCount = (low, high) => {
        let fizzBuzz = [];
        while (low <= high) {
            if (low % 15 == 0) {
                fizzBuzz.push("fizzbuzz");
            } else if (low % 3 == 0) {
                fizzBuzz.push("fizz");
            } else if (low % 5 == 0) {
                fizzBuzz.push("buzz");
            } else {
                fizzBuzz.push(low);
            }
            low++;
        }
        return fizzBuzz;
    }
}

module.exports = new countModel();