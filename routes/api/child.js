const pool = require("../../config/keys").pool;

const getChildById = (req, res) => {
    console.log("Inside get child");
    child_id_ = req.params.child_id;
    console.log(child_id_)
    //sno = req.body.sno;
    pool.query('SELECT * FROM child_data WHERE child_id = $1', [child_id_], (error, results) => {
        if (error){
            console.log(error)
            res.status(400).json({
                child: "Child not found"
            })
        }
        else
            res.status(200).json(results.rows);
    });
};

const getAllChildren = (req, res) => {
    pool.query('SELECT DISTINCT child_id FROM child_data ORDER BY sno ASC', (err, results) => {
        if(err){
            res.status(400).json({
                child: "No children found"
            })
        }
        else{
            res.status(200).json(results.rows);
        }
    });
};

const getChildByAWC = (req, res) => {
    awc_id = req.params.awc_id;
    pool.query('SELECT * FROM child_data WHERE awc_id = $1', [awc_id], (error, results) => {
        if (error) {
            res.status(400).json({
                result: "No children found"
            })
        }
        else{
            let anganwadiData = {};
            for (let index = 0; index < results.rows.length; index++) {
                const childInfo = results.rows[index];
                if (!anganwadiData[childInfo.child_id]) {
                    anganwadiData[childInfo.child_id] = [childInfo];
                    
                }
                else{
                    anganwadiData[childInfo.child_id].push(childInfo);
                }
                
            }
            res.status(200).json(anganwadiData);
        }
    })
}


module.exports = {
    getChildById,
    getAllChildren,
    getChildByAWC,
}

