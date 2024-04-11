
function resetdata(){
    var br = "</br>";


    userDetails.innerHTML = "(Your personal and account details will appear here after you submit.)";
    document.getElementById ("name").style.border = "1px solid black";
    document.getElementById("username").style.border = "1px solid black";
    document. getElementById ("password").style.border = "1px solid black";
    document.getElementById( "gender").style.border = "1px solid black";
    document.getElementById("age").style.border = "1px solid black";
    document.getElementById("email").style.border = "1px solid black";
    document.getElementById("address").style.border = "1px solid black";
    document.getElementById("interests").style.border = "1px solid black";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById ("background").style.height = "100vh";

    document.getElementById("data").innerHTML =
    "Name: " + name + br;
    "Username: " + username + br;
    "Gender: " + gender + br;
    "Password: " + password + br;
    "Email: " + email + br;
    "Address: " + address + br;
    "About the User: " + interests + br;

    return false;
}



function blurR() {
    if (document.getElementsByTagName ("input"). value == "") {
        document.getElementsByTagName ("input"). style. border = "2px solid red";
    } else {
        document.getElementsByTagName ("input"). style. border = "2px solid #00FF7F";
    }
}
    function focusG(){
    
        document.getElementsByTagName ("input"). style.border = "4px solid #00FF7F";
    }
