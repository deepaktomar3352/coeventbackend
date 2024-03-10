var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");


router.get('/fetchTitle', function (req, res) {
    pool.query("SELECT * FROM hometitle ORDER BY titleid DESC LIMIT 1", function (error, result) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
  
      else {
        console.log(result)
        res.status(200).json({ status: true, data: result[0], message: " succesfully" })
      }
    })
  });

  router.get('/fetchSponsorImg', function (req, res) {
    pool.query("select * from sponsor", function (error, result) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, data: result, message: 'Fetch Sponsor Succesfully' })
      }
  
    })
  
  });

module.exports = router;
