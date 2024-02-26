var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.post("/titlesubmit", function (req, res) {
  console.log(req.body);

  if (req.body.page == "home") {
    pool.query(
      "insert into home (  titlename, titledate, submitedby, updatedby, submitedat, updatedat)values(?,?,?,?,?,?)",
      [
        req.body.title,
        req.body.dt,
        req.body.submitedby,
        req.body.updatedby,
        req.body.submitedat,
        req.body.updatedat,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({ status: false, message: " server error" });
        } else {
          console.log(result);
          res
            .status(200)
            .json({ status: true, message: " Submit succesfully" });
        }
      }
    );
  } else if (req.body.page == "vilay") {
    pool.query(
      "insert into vilay (  titlename, titledate, submitedby, updatedby, submitedat, updatedat)values(?,?,?,?,?,?)",
      [
        req.body.title,
        req.body.dt,
        req.body.submitedby,
        req.body.updatedby,
        req.body.submitedat,
        req.body.updatedat,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({ status: false, message: " server error" });
        } else {
          console.log(result);
          res
            .status(200)
            .json({ status: true, message: " Submit succesfully" });
        }
      }
    );
  } else if (req.body.page == "technoparv") {
    pool.query(
      "insert into technoparv ( titlename, titledate, submitedby, updatedby, submitedat, updatedat)values(?,?,?,?,?,?)",
      [
        req.body.title,
        req.body.dt,
        req.body.submitedby,
        req.body.updatedby,
        req.body.submitedat,
        req.body.updatedat,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({ status: false, message: " server error" });
        } else {
          console.log(result);
          res
            .status(200)
            .json({ status: true, message: " Submit succesfully" });
        }
      }
    );
  }
});

router.get("/showsponsorimg", function (req, res) {
  pool.query("select * from sponsor", function (error, result) {
    console.log(error);
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      console.log(result);
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch Sponsor Succesfully",
      });
    }
  });
});


router.post('/update_vilay_title', function (req, res) {

  // console.log("body",req.body)
  pool.query('update  vilaytitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?',[ req.body.title ,req.body.dt,req.body.updatedby,req.body.updatedat,req.body.titleid],function (error, result) {
    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
      });
 });



router.post('/update_technoparv_title', function (req, res) {
 
  // console.log("body",req.body)
  pool.query('update  technoparvtitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?',[ req.body.title ,req.body.dt,req.body.updatedby,req.body.updatedat,req.body.titleid],function (error, result) {
    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
      });
    

});


router.post('/updated_home_title', function (req, res) {
  
  // console.log("body",req.body)
  pool.query('update  hometitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?',[ req.body.title ,req.body.dt,req.body.updatedby,req.body.updatedat,req.body.titleid],function (error, result) {
    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
      });
    

});


module.exports = router;
