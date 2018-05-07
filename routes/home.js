var express = require("express");
var router  = express.Router();
var passport= require("../config/passport");

// Home
router.get("/", function(req, res){
  res.render("home/welcome");
});
router.get("/who", function(req, res){
  res.render("home/who");
});
router.get("/seoul", function(req, res){
  res.render("home/seoul");
});
router.get("/seoul2", function(req, res){
  res.render("home/seoul2");
});
router.get("/fila", function(req, res){
  res.render("home/fila");
});
router.get("/milano", function(req, res){
  res.render("home/milano");
});
router.get("/kim", function(req, res){
  res.render("home/kim");
});
router.get("/falling", function(req, res){
  res.render("home/falling");
});
router.get("/palace", function(req, res){
  res.render("home/palace");
});
router.get("/supreme", function(req, res){
  res.render("home/supreme");
});
router.get("/offwhite", function(req, res){
  res.render("home/offwhite");
});
router.get("/snoop", function(req, res){
  res.render("home/snoop");
});
router.get("/nike", function(req, res){
  res.render("home/nike");
});
router.get("/tattoo", function(req, res){
  res.render("home/tattoo");
});
router.get("/mapmap", function(req, res){
  res.render("home/mapmap");
});
// Login
router.get("/login", function (req,res) {
  var username = req.flash("username")[0];
  var errors = req.flash("errors")[0] || {};
  res.render("home/login", {
    username:username,
    errors:errors
  });
});

// Post Login
router.post("/login",
  function(req,res,next){
    var errors = {};
    var isValid = true;

    if(!req.body.username){
      isValid = false;
      errors.username = "아이디를 입력해주세요.";
    }
    if(!req.body.password){
      isValid = false;
      errors.password = "패스워드를 입력해주세요.";
    }

    if(isValid){
      next();
    } else {
      req.flash("errors",errors);
      res.redirect("/login");
    }
  },
  passport.authenticate("local-login", {
    successRedirect : "/",
    failureRedirect : "/login"
  }
));

// Logout
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
