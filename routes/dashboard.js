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

router.post("/update_vilay_title", function (req, res) {
  // console.log("body",req.body)
  pool.query(
    "update  vilaytitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?",
    [
      req.body.title,
      req.body.dt,
      req.body.updatedby,
      req.body.updatedat,
      req.body.titleid,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: " updated succesfully" });
      }
    }
  );
});

router.post("/update_technoparv_title", function (req, res) {
  // console.log("body",req.body)
  pool.query(
    "update  technoparvtitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?",
    [
      req.body.title,
      req.body.dt,
      req.body.updatedby,
      req.body.updatedat,
      req.body.titleid,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: " updated succesfully" });
      }
    }
  );
});

router.post("/updated_home_title", function (req, res) {
  // console.log("body",req.body)
  pool.query(
    "update  hometitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?",
    [
      req.body.title,
      req.body.dt,
      req.body.updatedby,
      req.body.updatedat,
      req.body.titleid,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: " updated succesfully" });
      }
    }
  );
});

router.get("/showsponsor", function (req, res) {
  pool.query("select * from sponsor", function (error, result) {
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

router.get("/showsponsorimg", function (req, res) {
  pool.query("select * from sponsor", function (error, result) {
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

router.post("/sponsorupdate", function (req, res) {
  pool.query(
    "update sponsor set firstname=?,lastname=?,emailaddress=?,mobilenumber=?,company=?,comment=?,category=?,updatedate=?,updatedby=? where sponsorid=? ",
    [
      req.body.fname,
      req.body.lname,
      req.body.emailaddress,
      req.body.mobilenumber,
      req.body.companyname,
      req.body.comment,
      req.body.category,
      req.body.updatedat,
      req.body.submitedby,
      req.body.sponsorid,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: " server error" });
      } else {
        console.log(result);
        res.status(200).json({
          status: true,
          data: result[0],
          message: " updated succesfully",
        });
      }
    }
  );
});

router.post("/sponsorimgupdate", upload.single("logo"), function (req, res) {
  console.log(req.body);
  pool.query(
    "update sponsor set companylogo=? where sponsorid=?",
    [req.file.originalname, req.body.sponsorid],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: " server error" });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: " updated succesfully" });
      }
    }
  );
});

router.post("/delete_sponsor_detail", (req, res) => {
  console.log(req.body);
  pool.query(
    "delete from sponsor  where sponsorid=?",
    [req.body.sponsorid],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: " server error" });
      } else {
        console.log(result);
        res.status(200).json({
          status: true,
          data: result[0],
          message: " Deleted  succesfully",
        });
      }
    }
  );
});

router.get("/sponsordata", function (req, res) {
  res.render("sponsor", { message: "" });
});

router.post("/sponsorsubmit", upload.single("logo"), function (req, res, next) {
  pool.query(
    "insert into sponsor( firstname, lastname, emailaddress, mobilenumber, company, comment, companylogo, category, submitedat, updatedate, updatedby)values(?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.fname,
      req.body.lname,
      req.body.emailaddress,
      req.body.mobilenumber,
      req.body.companyname,
      req.body.comment,
      req.file.originalname,
      req.body.category,
      req.body.submitedat,
      req.body.updatedat,
      req.body.submitedby,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});

// *********************************USED FOR SCHEDULE SUBMIT DATA****************************************

//  ###################USED FOR TECHNOPARV SCHEDULE SUBMIT DATA####################
router.post(
  "/technoparv_schedule_submit",
  upload.single("logo"),
  function (req, res, next) {
    console.log(req.body);
    const table = req.body.table;

    pool.query(
      `insert into  ${table}( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo,page,day)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        req.body.eventname,
        req.body.type,
        req.body.venue,
        req.body.date,
        req.body.starttime,
        req.body.endtime,
        req.body.fee,
        req.body.coordinators,
        req.body.submitedat,
        req.body.updatedat,
        req.body.submitedby,
        req.file.originalname,
        req.body.page,
        req.body.day,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({ status: false, message: "Server error...." });
        } else {
          console.log(result);
          res
            .status(200)
            .json({ status: true, message: "Submited Succesfully" });
        }
      }
    );
  }
);

// ##################################################################################################
// ******************************************USED FOR UPDATE TECHNOPARV SCHEDULE********************************************
router.post("/technoparv_schedule_update", function (req, res, next) {
  const table = req.body.table;
  console.log("table", table);

  pool.query(
    `update ${table} set eventname=?, type=?, venue=?, date=?, starttime=?, endtime=?, fee=?, coordinators=?, updatedat=? where scheduleid=?`,
    [
      req.body.eventname,
      req.body.type,
      req.body.venue,
      req.body.dt,
      req.body.starttime,
      req.body.endtime,
      req.body.fee,
      req.body.coordinators,
      req.body.updatedat,
      req.body.scheduleid,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});
// ##################################################################################################################
router.post("/technoparv_schedule_delete", function (req, res, next) {
  const table = req.body.table;
  console.log(table);

  pool.query(
    `delete from ${table} where scheduleid=?`,
    [req.body.scheduleid],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});

//  ###################USED FOR VILAY SCHEDULE SUBMIT DATA###################################################################
router.post("/vilayday01", upload.single("logo"), function (req, res, next) {
  pool.query(
    "insert into vilayday01( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.eventname,
      req.body.type,
      req.body.venue,
      req.body.date,
      req.body.starttime,
      req.body.endtime,
      req.body.fee,
      req.body.coordinators,
      req.body.submitedat,
      req.body.updatedat,
      req.body.submitedby,
      req.file.originalname,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});

router.post("/vilayday02", upload.single("logo"), function (req, res, next) {
  pool.query(
    "insert into vilayday02( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.eventname,
      req.body.type,
      req.body.venue,
      req.body.date,
      req.body.starttime,
      req.body.endtime,
      req.body.fee,
      req.body.coordinators,
      req.body.submitedat,
      req.body.updatedat,
      req.body.submitedby,
      req.file.originalname,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});
router.post("/vilayday03", upload.single("logo"), function (req, res, next) {
  pool.query(
    "insert into vilayday03( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.eventname,
      req.body.type,
      req.body.venue,
      req.body.date,
      req.body.starttime,
      req.body.endtime,
      req.body.fee,
      req.body.coordinators,
      req.body.submitedat,
      req.body.updatedat,
      req.body.submitedby,
      req.file.originalname,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});
router.post("/vilayday04", upload.single("logo"), function (req, res, next) {
  pool.query(
    "insert into vilayday04( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.eventname,
      req.body.type,
      req.body.venue,
      req.body.date,
      req.body.starttime,
      req.body.endtime,
      req.body.fee,
      req.body.coordinators,
      req.body.submitedat,
      req.body.updatedat,
      req.body.submitedby,
      req.file.originalname,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error...." });
      } else {
        console.log(result);
        res.status(200).json({ status: true, message: "Submited Succesfully" });
      }
    }
  );
});
// #############################################################################################################

// **********************************************************************************************************************

// **************************USED FOR FETCH SCHEDULE DATA *******************************************************************

// ######################################USED FOR TECHNOPARV SCHEDULE FETCH DATA############################################
router.get("/technoparvday01fetch", function (req, res) {
  pool.query("select * from technoparvday01", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetchtechnoparv day01 Succesfully",
      });
    }
  });
});
router.get("/technoparvday02fetch", function (req, res) {
  pool.query("select * from technoparvday02", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch technoparv day02 Succesfully",
      });
    }
  });
});
router.get("/technoparvday03fetch", function (req, res) {
  pool.query("select * from technoparvday03", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch technoparv day03 Succesfully",
      });
    }
  });
});
router.get("/technoparvday04fetch", function (req, res) {
  pool.query("select * from technoparvday04", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch  technoparv  day04 Succesfully",
      });
    }
  });
});
// ########################################################################################################################
// ######################################USED FOR VILAY SCHEDULE FETCH DATA############################################
router.get("/vilayday01fetch", function (req, res) {
  pool.query("select * from vilayday01", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      console.log(result);
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch vilay day01 Succesfully",
      });
    }
  });
});
router.get("/vilayday02fetch", function (req, res) {
  pool.query("select * from vilayday02", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      console.log(result);
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch vilay day02 Succesfully",
      });
    }
  });
});
router.get("/vilayday03fetch", function (req, res) {
  pool.query("select * from vilayday03", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      console.log(result);
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch vilay day03 Succesfully",
      });
    }
  });
});
router.get("/vilayday04fetch", function (req, res) {
  pool.query("select * from vilayday04", function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server error...." });
    } else {
      console.log(result);
      res.status(200).json({
        status: true,
        data: result,
        message: "Fetch vilay day 04 Succesfully",
      });
    }
  });
});
// ************************************************************************************************************************

//  ###################USED FOR SLIDERS IMAGES SUBMIT####################
router.post("/slider_submit", upload.any(), (req, res) => {
  const files = req.files;
  const table = req.body.table;
  console.log("table :", table);
  if (!files || !table) {
    res.status(200).json({ message: "server error" });
  }
  pool.query(
    `INSERT INTO ${table} (slidepicl, submitedat, updatedat, submitedby) VALUES (?,?,?,?)`,
    [
      files.map((file) => [file.originalname]),
      req.body.submitedat,
      req.body.updatedat,
      req.body.submitedby,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(200).json({ status: false, message: "server error" });
      }
      console.log(result); 
      res 
        .status(200)
        .json({
          status: true,
          data: result,
          message: "Record submitted successfully",
        });
    }
  );
});

//  calling event gallery function
router.get('/gallery', function (req, res) {
  pool.query("select * from eventsgallerypic", function (error, result) {
      if (error) {
          console.log(error)
          res.status(200).json({ data: '', 'message': 'server error' })
      }
      else {

          res.status(200).json({ status: true, data: result, 'message': 'fetched success' })

          // res.send(result)
      }

  });
});



router.post('/uploadimg', upload.any(), (req, res) => {
  const files = req.files;
  const table = req.body.table;
  console.log('table :', table)
  if (!files || !table) {
      res.status(200).json({ 'message': 'server error' })
  }
  pool.query(`INSERT INTO ${table} (picname, picsize, picmime) VALUES ?`, [files.map(file => [file.originalname, file.size, file.mimetype])], (error, result) => {
      if (error) {
          console.log(error)
          res.status(200).json({ status: false, 'message': 'server error' })
      }
      console.log(result)
      res.status(200).json({ status: true, data: result, message: "Record submitted successfully" })

  })

});

module.exports = router;
