console.log("<------------------Welcome to the Address Book System------------------>\n");

class Contact {

    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        const FIRST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (FIRST_NAME_REGEX.test(firstName)) {
            this._firstName = firstName;
        }
        else throw "First Name : " + firstName + " is Invalid!";

    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const LAST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (LAST_NAME_REGEX.test(lastName)) {
            this._lastName = lastName;
        }
        else throw "Last Name : " + lastName + " is Invalid!";

    }

    get address() {
        return this._address;
    }
    set address(address) {
        const ADRESS_REGEX = RegExp("[A-Za-z0-9- ]{4,}");
        if (ADRESS_REGEX.test(address)) {
            this._address = address;
        }
        else throw "Address : " + address + " is Invalid!";
    }

    get city() {
        return this._city;
    }
    set city(city) {
        const CITY_REGEX = RegExp("[A-Za-z ]{4,}");
        if (CITY_REGEX.test(city)) {
            this._city = city;
        }
        else throw "City : " + city + " is Invalid!";
    }

    get state() {
        return this._state;
    }
    set state(state) {
        const STATE_REGEX = RegExp("[A-Za-z ]{4,}");
        if (STATE_REGEX.test(state)) {
            this._state = state;
        }
        else throw "State : " + state + " is Invalid!";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const ZIP_REGEX = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (ZIP_REGEX.test(zip)) {
            this._zip = zip;
        }
        else throw "Zip : " + zip + " is Invalid!";
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const PHONE_NUMBER_REGEX = RegExp("^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$");
        if (PHONE_NUMBER_REGEX.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw "Phone Number : " + phoneNumber + " is Invalid!";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        const EMAIL_REGEX = RegExp("^[a-z0-9]+(([\\._+-][a-z0-9]+)?)\\@[a-z0-9]+\\.(([a-z]{2,4})(\\.[a-z]{2,4})?)$");
        if (EMAIL_REGEX.test(email)) {
            this._email = email;
        }
        else throw "Email : " + email + " is Invalid!";
    }

    toString() {
        return "First Name: " + this.firstName + " | Last Name: " + this.lastName + " | Address: "
            + this.address + " | City: " + this.city + " | State: " + this.state + " | Zip: " + this.zip +
            " | Phone Number: " + this.phoneNumber + " | Email: " + this.email + "\n";
    }
}

//UC1 : Creating New Contact Object
let contact = new Contact("Abc", "Xyz", "1/2 abc Colony", "Mumbai", "Maharashtra", "123456", "91 9876543211", "abc@gmail.com");
console.log("Creating new contact :- ")
console.log(contact.toString());
console.log("*******************************************************************************************************************************************************\n\n")

//UC2 : Checking For Invalid Fields
{
    console.log("Checking invalid Fields :-")
    try {
    contact.firstName = "Jo";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.lastName = "Li";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.address = "Hom";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.city = "Lko";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.state = "UP";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.zip = "3214560";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.phoneNumber = "989889899899";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.email = "abc.ad.@gmail.com";
    } catch (error) {
        console.error(error);
    }
    console.log("\nContact After Setting Invalid Fields : \n" + contact.toString());
}
console.log("*******************************************************************************************************************************************************\n\n")

//UC3 : Create an Address Book Array and Add New Contacts to it.
console.log("Creating address book array and adding new contacts :-")
let addressBookArray = new Array();
let contact1=new Contact("Mark","Smith","Borivali",'Mumbai','Maha','125412',"99 7854123233",'mark@gmail.com');
addressBookArray.push(contact1)
let contact2=new Contact("Gary","Lus","Sitaburdi",'Nagpur','Maha','441904',"91 7857723233",'gary@gmail.com');
addressBookArray.push(contact2)
console.log("ADDRESS BOOK ARRAY :");
addressBookArray.forEach(contact => console.log(contact.toString()));
console.log("*******************************************************************************************************************************************************\n\n")

//UC4 : Find and Edit Existing Contact using their Name
let findName = "Gary"
contact2 = addressBookArray.find(contact => contact._firstName == findName)
if(contact2 != undefined) {
    contact2.phoneNumber = "12 9898565653"
    contact2.address = "1/2 abc society"
    contact2.email = "garylus@gmail.com"
} else {
    console.log(`${findName} not found`)
}
console.log("After editing existing contact : ")
console.log(addressBookArray)