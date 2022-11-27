const fs = require('fs')
const path = require('path')

const contactsPath = path.resolve('./db/contacts.json')
console.log('contactsPath: ', contactsPath)

fs.readFile(contactsPath, 'utf8', (error,data) => {
    if(error){
        console.error(error);
    }
   // console.log('DATA: ' ,data);
})


// (async() => {
//     try{
//         const data = await fs.readfile(contactsPath, 'utf8')
//         console.log('DATA: ' ,data);

//         const newContent = `${data} updated`;
//         fs.writeFile('./db/contacts-updated.json', newContent, 'utf8')
//     }
//     catch(error){
//      console.error(error)
//     }
// })

// // TODO: задокументировать каждую функцию
// function listContacts() {
//     // ...твой код
//   }
  
//   function getContactById(contactId) {
//     // ...твой код
//   }
  
//   function removeContact(contactId) {
//     // ...твой код
//   }
  
//   function addContact(name, email, phone) {
//     // ...твой код
//   }