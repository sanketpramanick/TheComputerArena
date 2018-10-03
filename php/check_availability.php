<?php
require_once("DBController.php");
$db_handle = new DBController();
if(!empty($_POST["username"])) {
  $query = "SELECT * FROM accounts WHERE Email='" . $_POST["username"] . "'";
  $user_count = $db_handle->numRows($query);
  if($user_count>0) {
      echo "Username Not Available.";
  }else{
      echo "Username Available";
  }
}
?>