<?php # Script 12.1 - email.php #2

/* The function takes one argument: a string.
 * The function returns a clean version of the string.
 * The clean version may be either an empty string or
 * just the removal of all newline characters.
 */
function spam_scrubber($value) {

    // List of very bad values:
    $very_bad = array('to:', 'cc:', 'bcc:', 'content-type:', 'mime-version:', 'multipart-mixed:', 'content-transfer-encoding:');

    // If any of the very bad strings are in
    // the submitted value, return an empty string:
    foreach ($very_bad as $v) {
        if (stripos($value, $v) !== false) return '';
    }

    // Replace any newline characters with spaces:
    $value = str_replace(array( "\r", "\n", "%0a", "%0d"), ' ', $value);

    // Return the value:
    return trim($value);
    
} // End of spam_scrubber() function.

// Check for form submission:
if (isset($_POST['submit'])) {
    
    // Clean the form data:
    $scrubbed = array_map('spam_scrubber', $_POST);

    // Minimal form validation:
    if (!empty($scrubbed['name']) && !empty($scrubbed['email']) && !empty($scrubbed['comments']) ) {
    
        // Create the body:
        $body = "Name: {$scrubbed['name']}\n\nComments: {$scrubbed['comments']}";
        $body = wordwrap($body, 70);
    
        // Send the email:
        mail('leonardger@gmail.com', 'Contact Form Submission', $body, "From: {$scrubbed['email']}");
        
        // Print a message:
        header("Location: thanks.html");
        exit();
    
    } 
    else 
    {
        $message = 'Please fill out the form completely.';
    }
    
} // End of main isset() IF.
?>