function validateForm() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Clear previous error messages
    errorMessage.innerHTML = "";

    if (userId === "" || password === "") {
        errorMessage.innerHTML = "User ID and Password cannot be empty!";
        return false;
    }

}
