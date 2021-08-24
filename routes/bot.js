const express = require("express");
const app = express.Router();
let data = require("../mongo/data.js");
let messages = require("../mongo/message.js");
let contacts = require("../mongo/contacts.js");
let validator = require("validator");

app.get("/login/:token", async (req, res) => {
  
});

module.exports = app;

function checkAuth(req, res, next) {
  if (req.session.user) return next();
  
  return res.redirect("/login")
}

async function GetContact(UID) {
  let check = await contacts.findOne({UID: UID});
  
  if (!check) {
    
    let newData = new contacts({
      UID: UID,
      List: []
    });
    
    newData.save()
    
    return newData;
  }
  
  return check;
}