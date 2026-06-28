//create an open array to store contacts
const contactBook =[]
//function to add a contact to the contact book
function addcontact(name,phone,email){
    let contact = {
        name: name,
    phone: phone,
    email:email}
    
contactBook.push(contact);
console.log(`Contact ${name}  was added to your phonebook`);
    }
    addcontact("Mary ann", "09087654321","ann234@yahoo.com","barcelona");
    addcontact("sophie ella", "08012345678","ellaa@hotmail.com","paris");
    addcontact("james bond", "07098765432","jamesb@gmail.com","USA");
    addcontact("philip pan", "08123456789","philippan@gmail.com","tokyo");
    addcontact("lisa simpson", "09012345678","lisas@gmail.com","springfield");
    addcontact("johnna emma", "08098765432","johnna@gmail.com","new york");
    //function to search for a contact by name
    function searchContact(name){
        return contactBook.find(contact => contact.name === name);
    }
    console.log(searchContact("james bond"));
        
            
        //function to list contacts in alphabetical order
        function listContacts(){
            contactBook.sort((a,b) => a.name.localeCompare(b.name));
            contactBook.forEach(contact => {
                console.log(contact.name);
                console.log(contact.phone);
                console.log(contact.email);
                console.log('-------------------');
            }
        )}
        listContacts();
            
            