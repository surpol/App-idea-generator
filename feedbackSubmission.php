<?php
if (isset ($_POST['send'])) {
$subject = $_POST['name'];
$subject .= "'s Feedback Submission";
$email = $_POST['email'];
$message = $_POST['feedback'];
mail('suryapolina@gmail.com', $subject,$message,'From:' . $email);
}
else {
?>
<form class="form-popup" method="post" action="feedbackSubmission.php">
	<input class="hide" type="Name" name="name" placeholder="Enter Name" id="name" required>
	<input class="hide" type="Email" name="email" placeholder="Your Email" id="email" required>
	<input class="hide" type="text" name="feedback" placeholder="Feedback?" id="feedback" value="" />
	<button class="hide" type="submit" class="btn" id="button3">Send</button>
	<button class="hide" type="reset" class="btn" id="button4">Reset</button>
</form>
<?php
}
?>