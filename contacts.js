const fs = require('fs')
const path = require('path')

// const contactsPath = require('./db/contacts.json')

const contactsPath = path.basename('./db/contacts.json')

fs.readFile('./db/contacts.json', "utf8", 
            function(error,data){
                if(error) throw error;
                console.log(data); 
});