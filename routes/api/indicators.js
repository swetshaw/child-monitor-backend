const pool = require("../../config/keys").pool;

const getGirlsWFH = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    if (flag =='0'){
        
        pool.query('SELECT * FROM wfl_girls_0_2_zscores' , (err, result) => {
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
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const length_ = data[index].length;
                    length.push(length_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
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
    else if (flag == 1){
        pool.query('SELECT * FROM wfh_girls_2_5_zscores' , (err, result) => {
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
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const length_ = data[index].height;
                    length.push(length_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
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
};

const getBoysWFH = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    if (flag =='0'){
        
        pool.query('SELECT * FROM wfl_boys_0_2_zscores' , (err, result) => {
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
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const length_ = data[index].length;
                    length.push(length_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
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
    else if (flag == 1){
        pool.query('SELECT * FROM wfh_boys_2_5_zscores' , (err, result) => {
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
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const length_ = data[index].height;
                    length.push(length_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'length': length,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });


    }
};


const getGirlsLFA = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    if (flag =='0'){

        pool.query('SELECT * FROM lfa_girls_0_2_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });

    }

    else if (flag == 1){
        pool.query('SELECT * FROM hfa_girls_2_5_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });
    }
}

const getBoysLFA = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    if (flag =='0'){

        pool.query('SELECT * FROM lfa_boys_0_2_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });

    }

    else if (flag == 1){
        pool.query('SELECT * FROM hfa_boys_2_5_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });
    }
}

const getGirlsWFA = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    pool.query('SELECT * FROM wfa_girls_0_5_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });
}

const getBoysWFA = (req, res) => {
    
    //gender = req.params.gender;
    flag = req.params.flag;
    
    pool.query('SELECT * FROM wfa_boys_0_5_zscores' , (err, result) => {
            if(err){
                res.status(400).json({
                    "result": "Problem executing query",
                    "error": err
                })
            }
            else{
                data = result.rows;
                let month = [];
                let minus_three_sd = [];
                let minus_two_sd = [];
                let median = [];
                let plus_two_sd = [];
                let plus_three_sd = [];
                for (let index = 0; index < data.length; index++) {
                    const month_ = data[index].month;
                    month.push(month_);

                    const minus_three_sd_ = data[index].minus_3sd;
                    minus_three_sd.push(minus_three_sd_);

                    const minus_two_sd_ = data[index].minus_2sd;
                    minus_two_sd.push(minus_two_sd_);

                    const median_ = data[index].median;
                    median.push(median_);

                    const plus_two_sd_ = data[index].sd2;
                    plus_two_sd.push(plus_two_sd_);

                    const plus_three_sd_ = data[index].sd3;
                    plus_three_sd.push(plus_three_sd_);
                }
                
                res.status(200).json({
                    'month': month,
                    'minus_three_sd': minus_three_sd,
                    'minus_two_sd': minus_two_sd,
                    'median': median,
                    'plus_two_sd': plus_two_sd,
                    'plus_three_sd': plus_three_sd
                })
            }
        });

    }


module.exports = {
    getGirlsWFH,
    getBoysWFH,
    getGirlsLFA,
    getBoysLFA,
    getGirlsWFA,
    getBoysWFA
}