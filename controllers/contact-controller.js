const Contact = require("../models/contact");
const createPath = require("../helpers/create-path");

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), { title: "ERROR" });
};

const getContact = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => res.render(createPath("contacts"), { title, contacts }))
    .catch((error) => {
      handleError(res, error);
    });
};

module.exports = { getContact };
