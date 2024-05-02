// Get all contacts
// Get /contacts

const getAllContact = async (req, res) => {
  try {
    if (req.query.q && req.query.r) {
      res.send(`Contacts Page : q = ${req.query.q}, r = ${req.query.r}`);
    } else {
      res.send("Contacts Page");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = getAllContact;
