<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'] ?? 'Anonymous';
  $email = $_POST['email'] ?? 'No email provided';


  echo "Thank you for registering, " . htmlspecialchars($name) . "! We will send details to " . htmlspecialchars($email);
}
