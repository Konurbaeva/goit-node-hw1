import contacts from './contacts.cjs';

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
        const allBooks = await contacts.listContacts()
        console.table(allBooks)
        break;
  
      case "get":
        const bookById = await contacts.getContactById(id);
        console.log('book id: ' , bookById)
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

invokeAction({ action: "list"});