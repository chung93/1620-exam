const contactList = [] //store your contacts as objects

function addArray(array){
    contactList.push(contactArray);
    return contactList
}
//add array to list PART 1

function getInputs() {
    let inputn = `<div class = "name" contenteditable = "true"></div>`;
    let inputp = `<div class = "phone" contenteditable = "true"></div>`;
    let inpute = `<div class = "email" contenteditable = "true"></div>`;
    const inputs = inputn, inputp, inpute;
    return inputs
}
//get inputs via editable html

function makeArray(input) {
    let contactArray = {name: inputn, phone: inputp, email: inpute}
    return contactArray
}
//put inputs into array

function insertLiterals(){
    let contact = `<li>name: ${inputn} <br> phone: ${inputp} <br> email: ${inpute}</li>`;
    return contact
}
//change html

function newContact(){
    const addContact = document.querySelector("#new-contact-btn");
    addContact.addEventListener("click", addArray(getInputs(makeArray(AAAAAAAAAAAA?))));
    return contactList
}
//put array into array PART 2

//click new contact (event, storage). open up contact template (editable, separate, storage (literals?)). prompt for name, phone, email. store as array, push to contactList (AAAAAAAAAA).

//Clicking on the 'New Contact' button should open the view to create a contact. 
//For now you just need the following info: name, phone, email
//You can use input fields, or content editable divs for creating a contact.
//When the save button is clicked the placeholder image and contacts name are added to the sidebar list. The user is also returned to the default view with the 'New Contact' button.

//When a name on the sidebar is clicked the contact info is displayed along with the 'Delete Contact' and 'Edit Contact' buttons.
//When the delete contact button is clicked the contact should be removed from the array as well as the sidebar menu.
//The 'Edit Contact' button doesn't need to work for the exam.

//Use event bubbling for the sidebar nav menu.

//Use templates for dynamic components added via JS.
//A general rule of thumb about hiding things: If that thing doesn't really change and you are going to be returning to it (showing it) often it is ok to hide it. Otherwise it is preferable to create and remove. Since the "New Con