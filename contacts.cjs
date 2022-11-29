const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async() => {
 const data = await fs.readFile(contactsPath)
 return JSON.parse(data)
}

module.exports = {
    listContacts,
    // getContactById,
    // removeContact,
    //  addContact
}