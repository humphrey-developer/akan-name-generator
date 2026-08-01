// SETTING UP EVENT LISTENER
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submission got")
}
// selecting form from my HTML
const formElement = document.getElementById("form_section");
formElement.addEventListener("submit",handleFormSubmit);

// READING USER INPUT FROM HTML

function handleFormSubmit(event) {
    event.preventDefault();

    const birthdateValue = document.getElementById("birthdate").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;

    console.log("Date chosen:", birthdateValue);
    console.log("Gender chosen:", selectedGender);
}

const formElement = document.getElementById("form");
formElement.addEventListener("submit", handleFormSubmit);




// AKAN NAMES EDITS 
// DAY OF WEEK

const days_of_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// MALE NAMES

const male_names = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// FEMALE NAMES

const female_names = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];










