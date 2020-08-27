
const countModel = require("../model/count.model");

class UserController {
    /** 
     *  fizz buzz 
     */
    fizzBuzzCount(req, res, next) {
        const { low = 1, high } = req.query;
        /** validation  section*/
        if (!high) {
            res.body.message = "higher limit is mandatory";
            res.body.status = "error";
            return next();
        }
        if (low) {
            if (isNaN(low)) {
                res.body.message = "lower limit should be numeric";
                res.body.status = "error";
                return next();
            } else if (parseInt(low) < 1) {
                res.body.message = "lower limit should be greater than 1";
                res.body.status = "error";
                return next();
            }
        }
        if (high) {
            if (isNaN(high)) {
                res.body.message = "higher limit should be numeric";
                res.body.status = "error";
                return next();
            } else if (parseInt(high) < parseInt(low)) {
                res.body.message = "higher limit should be greater than lower limit";
                res.body.status = "error";
                return next();
            }
        }
        /** logical section*/
        try {
            let data = countModel.fizzBuzzCount(parseInt(low), parseInt(high))
            res.body.message = "successfully fetched";
            res.body.status = "success";
            res.body.result = data;
            return next();
        } catch (err) {
            res.body.message = err;
            res.body.status = "error";
            return next();
        }
    }

}

module.exports = new UserController();


