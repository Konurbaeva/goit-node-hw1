import contacts from './contacts.cjs';

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
        const allBooks = await contacts.listContacts()
        console.log(allBooks)
        break;
  
      case "get":
        // ... id
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

  
invokeAction({ action: "list"});