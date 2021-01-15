const pool = require("../../config/keys").pool;

const getchildStatusbyId = (req, res) => {
  child_id_ = req.params.child_id;

  pool
    .query("SELECT * FROM child_data WHERE child_id = $1", [child_id_])
    .then((rows) => {
      child_data = rows;
      age = child_data.rows[child_data.rows.length - 1].age;
      gender = child_data.rows[child_data.rows.length - 1].gender;
      if (age < 24 && gender == "Girl") {
        return pool.query(
          "SELECT minus_2sd FROM lfa_girls_0_2_zscores WHERE month = $1",
          [age]
        );
      } else if (age > 24 && gender == "Girl") {
        return pool.query(
          "SELECT minus_2sd FROM hfa_girls_2_5_zscores WHERE month = $1",
          [age]
        );
      } else if (age < 24 && gender == "Boy") {
        return pool.query(
          "SELECT minus_2sd FROM lfa_boys_0_2_zscores WHERE month = $1",
          [age]
        );
      } else if (age > 24 && gender == "Boy") {
        return pool.query(
          "SELECT minus_2sd FROM hfa_boys_2_5_zscores WHERE month = $1",
          [age]
        );
      }
    })
    .then((rows) => {
      stunting_status = rows;
      return stunting_status;
    })
    .then(() => {
      data = child_data.rows[child_data.rows.length - 1];
      //let gender = data.gender;
      // let age = data.age;
      // let weight = data.weight;
      let height = data.height;
      let minus_2sd = stunting_status.rows[0].minus_2sd;
      let minus_3sd = stunting_status.rows[0].minus_3sd;

      if (height <= minus_3sd) {
        isStunted = "Severely Stunted";
      } else if (height > minus_3sd && height <= minus_2sd) {
        isStunted = "Moderately Stunted";
      } else if (height > minus_2sd) {
        isStunted = "Normal";
      }
    })
    .then(() => {
      res.status(200).json({
        isStunted: isStunted,
        child_data: child_data.rows,
      });
    });
};

const getChildById = (req, res) => {
  child_id_ = req.params.child_id;

  //sno = req.body.sno;
  pool.query(
    "SELECT * FROM child_data WHERE child_id = $1",
    [child_id_],
    (error, results) => {
      if (error) {
        res.status(400).json({
          child: "Child not found",
        });
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const getAllChildren = (req, res) => {
  pool.query(
    "SELECT DISTINCT child_id FROM child_data ORDER BY sno ASC",
    (err, results) => {
      if (err) {
        res.status(400).json({
          child: "No children found",
        });
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const getChildByAWC = (req, res) => {
  awc_id = req.params.awc_id;
  pool.query(
    "SELECT * FROM child_data WHERE awc_id = $1",
    [awc_id],
    (error, results) => {
      if (error) {
        res.status(400).json({
          result: "No children found",
        });
      } else {
        let anganwadiData = {};
        for (let index = 0; index < results.rows.length; index++) {
          const childInfo = results.rows[index];
          if (!anganwadiData[childInfo.child_id]) {
            anganwadiData[childInfo.child_id] = [childInfo];
          } else {
            anganwadiData[childInfo.child_id].push(childInfo);
          }
        }
        res.status(200).json(anganwadiData);
      }
    }
  );
};

module.exports = {
  getChildById,
  getAllChildren,
  getChildByAWC,
  getchildStatusbyId,
};
