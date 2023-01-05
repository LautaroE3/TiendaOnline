const express = require("express");
const router = express.Router();
const session = require("cookie-session");
const Admin = require("../models/myModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { stringify } = require("querystring");


router.use(
  session({
      login: false,
      cerrar:false,
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: true },
  })
);

router.get("/", async (req, res, next) => {
  return res.status(200).render("home");
});
router.get("/carrito", async (req, res, next) => {
  return res.status(200).render("carrito");
});
router.get("/favoritos", async (req, res, next) => {
  return res.status(200).render("favoritos");
});
router.get("/login", async (req, res, next) => {
  return res.status(200).render("login");
});
router.post("/login", (req, res) => {
  console.log(req.body.usuario);
  Admin.find({ apellido :1  }, (err, docs) => {
    console.log(docs);
      if(req.body.usuario != docs[0].usuario){
          console.log("USUARIO: MAL"+req.body.usuario)
        
      }
      else{
          bcrypt.compare(req.body.contraseña,bcrypt.hashSync(docs[0].contraseña, 5),(err, resul) => {
            
              if (err) throw console.log(err);;
              
              if (resul) {
                req.session.login = true;
                    res.status(200).redirect("/");    
                console.log(req.session.login);      
              }     
              else {
                  res.status(200).render("login");
                  console.log("NO LOGUEADO")
              }
          });
      }
  }); 
});

module.exports = router;
