<?php
// get values
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$message = htmlspecialchars($_POST["message"]);

// "save" message in log
log_error("Received message: {email=" . $email . ", name=" . $name . ", message=" . $message . "}");

// send nice text back
echo "Danke " . $name . ". Die Nachricht wird an die zuständige Person weitergeleitet :)";

?>
