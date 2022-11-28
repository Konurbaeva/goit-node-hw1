const fs = require('fs')
const path = require('path')

const contactsPath = path.join(__dirname, "./db/contacts.json");

fs.readFile(contactsPath, 'utf8', (error,data) => {
    if(error){
        console.error(error);
    }
     console.log(data);
})

// fs.writeFile("./db/contacts-updated.json", contactsPath, (err) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log(fs.readFileSync("./db/contacts-updated.json", "utf8"));
//     }
//   });

function listContacts() {
  console.log()
  }

//  function getContactById(contactId) {

//     // ...твой код
//   }
  
//  function removeContact(contactId) {
//     // ...твой код
//   }
  
//   function addContact(name, email, phone) {
//     // ...твой код
//   }

// module.exports = {
//     listContacts,
//     getContactById,
//     removeContact,
//      addContact
// }

module.exports={
  listContacts
}

