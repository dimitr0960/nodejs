const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contact-controller");

router.get("/contacts", getContact);

module.exports = router;
