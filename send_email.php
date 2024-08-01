<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(trim($_POST["name"]));
  $phone = htmlspecialchars(trim($_POST["phone"]));
  $email = htmlspecialchars(trim($_POST["email"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  if (!empty($name) && !empty($email) && !empty($message)) {
    $to = "bishakh99@outlook.com";
    $subject = "New message from your website";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
      echo "Message sent successfully.";
    } else {
      echo "Failed to send message.";
    }
  } else {
    echo "Please fill in all required fields.";
  }
} else {
  echo "Invalid request method.";
}
?>
