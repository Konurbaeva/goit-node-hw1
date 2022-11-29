import contacts from './contacts.cjs';

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
        const allContacts = await contacts.listContacts()
        console.table(allContacts)
        break;
  
      case "get":
        const contactId = await contacts.getContactById(id);
        console.log('contact id: ' , contactId)
        break;
  
      case "add":
        const newContact = await contacts.addContact({id, name, email, phone})
        console.log('newContact: ', newContact)
        break;
  
      case "remove":
        const removedContact = await contacts.removeContact(id)
        console.log('removedContact id: ' , removedContact)
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }

// invokeAction({ action: "list"});
 // invokeAction({ action: "get", id: 1});
// invokeAction({ action: "add", id: 11, name: "Madina", email: "madi@test.de", phone: "123"});

 invokeAction({ action: "remove", id: 'JFRIsXmdWPg-Tjfq9lfQI'});

// const actionIndex = process.argv.indexOf("--action");

// if(actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1];
//     invokeAction({action})
// }
