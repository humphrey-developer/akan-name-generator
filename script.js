// AKAN NAMES EDITS 
// DAY OF WEEK

const days_of_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// MALE NAMES

const male_names = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// FEMALE NAMES

const female_names = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];



// SETTING UP EVENT LISTENER
function handleFormSubmit(event) {
    event.preventDefault();

     const birthdateValue = document.getElementById("birthdate").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;

    const dateParts = birthdateValue.split("-"); 

    const year = parseInt(dateParts[0], 10); 
    const MM   = parseInt(dateParts[1], 10); 
    const DD   = parseInt(dateParts[2], 10); 

    const CC = Math.floor(year / 100);     
    const YY = year % 100;

    console.log("Gender:", selectedGender);
    console.log(`CC: ${CC}, YY: ${YY}, MM: ${MM}, DD: ${DD}`);
}    

   
// selecting form from my HTML
const formElement = document.getElementById("form_section");
formElement.addEventListener("submit",handleFormSubmit);
















