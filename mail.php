<?php 

if(isset($_POST['submit'])){
    
    // POST function for sending mail | bound to form inputs

    $email = $_POST['email']; // the user's e-mail
	$name = $_POST['name']; // the user's name
	
    //                                              mail
	$subject_client = "Fontys Enabling Technologies";
	$message_client = "Dear $name,". "\n"
	."\n"
		."\n"
		."\n"
		."Thank you for using the Innovation Hub. As requested we have send you a pdf file with all the information as attachment to this mail."."\n"
        ."\n"
        ."\n"
        ."Regards, "."\n"
        ."\n"
        ."\n"
        ."Fontys InnovationLab"."\n";
    
    
    $headers = 'From: noreply@fontys.nl';
    
    
    $to = $email; // this is the user
//    mail($to, $subject_me, $message_me);   
    mail ($to, $subject_client, $message_client, $headers); // sends a copy of the message to the sender
}


?>