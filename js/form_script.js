function validateForm() {
    var name = document.getElementById("name").value; //creates variable called name and fetches the input lablled with the id 'name'
    var email = document.getElementById("email").value; //creates variale called email and fetches the input labelled with the id 'email'
    var recipe = document.getElementById("recipe").value; //creates variable called recipe and fetches the input labelled with the id 'recipe'

    if (name === "" || email === "" || recipe === "") {  //creates an 'if' statement using the logic sign for OR (||) to detect if any fields have been left empty
        alert("Please fill in all fields."); //if any/all fields are left empty, the loop will run providing a pop-up to tell users to fill the fields before they can submit 
        return false;
    }

    return true; //once all fields are filled, it will return 'true' allowing the user to submit their form to the email
}