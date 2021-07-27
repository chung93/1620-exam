const contactList = [] //store your contacts as objects

const contact1 = {
    name: "Bingus Bongus",
    phoneNum: "604-604-6044",
    address: "Swamp"
}

const contact2 = {
    name: "Bongus Bongus",
    phoneNum: "604-604-0644",
    address: "River"
}

const contact3 = {
    name: "Bungus Bongus",
    phoneNum: "604-604-6444",
    address: "Lake"
}

function addContacts(){
    contactList.push(contact1, contact2, contact3)
    return contactList
}

function createNav(){

}

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