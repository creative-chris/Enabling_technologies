
// 404 message alert
function noproceed(){
    alert("THis page doesn't exist yet.");
};

$('#icon1').click(function(){
    alert("THis page doesn't exist yet.");
});

// On mail send >>

// input boolean
var nameinput = false;
var emailinput = false;

// get value of the input

// var nameinputGET = document.getElementById("name");
// var emailinputGET = document.getElementById("email");

var nameinputGET  = document.forms["emailer"]["name"].value;
var emailinputGET = document.forms["emailer"]["email"].value;



function mailsend() {

    // if the visitor writes down their information then
    // both booleans are TRUE

    // -----
    // if(emailinputGET.value.lenght & nameinputGET.value.lenght > 0) {
    //     nameinput = true;
    //     emailinput - true;
    // }
    // -----

    if(emailinputGET == "") {
        nameinput = true;
        emailinput - true;
    }
    // If Booleans are true, this message will popup
    if(nameinput && emailinput == true) {

        alert("Thank you, A mail has been send to you." );
    }

    // Else if both booleans are still False
    else{
        alert("You have to fill in the form before we send you something." );
    }

    console.log(nameinputGET.value.lenght + emailinputGET.value.lenght);
};

