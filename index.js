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
        // ... name email phone
        break;
  
      case "remove":
        // ... id
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }

// invokeAction({ action: "list"});
 invokeAction({ action: "get", id: 1});

// const actionIndex = process.argv.indexOf("--action");

// if(actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1];
//     invokeAction({action})
// }
