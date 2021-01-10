const pool = require("../../config/keys").pool;

const getWFH = (req, res) => {
    console.log("inside getWFH");
    gender = req.params.gender;
    flag = req.params.flag;
    
    if (gender == 'girl' && flag =='0'){
        console.log("Inside if loop");
        pool.query('SELECT * FROM girls_zero_wfh' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let length = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const length_ = data[index].length_cm;
                    length.push(length_);

                    const minus_three_sd_ = data[index].sam;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].mam_min;
                    minus_two_sd.push(minus_two_sd_);

                    const plus_two_sd_ = data[index].overweight_min;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].overweight_max;
                    plus_three_sd.push(plus_three_sd_);
                }
                console.log(length)
                res.status(200).json({
                    'length': length,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });

    }
}

module.exports = {
    getWFH
}