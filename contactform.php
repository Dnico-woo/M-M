<?php

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'cakiri23@wooster.edu';  // Replace with your email address
  $subject = 'New Contact Form Submission';
  $body = "From: $name\n E-Mail: $email\n Message:\n $message";

  // Send the email
  if (mail($to, $subject, $body)) {
    echo '<p>Thank you for your message! We will get back to you as soon as possible.</p>';
  } else {
    echo '<p>An error occurred and your message could not be sent. Please try again later.</p>';
  }
}

?>
