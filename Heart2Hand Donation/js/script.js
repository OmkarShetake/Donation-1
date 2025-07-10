function sendMail() {
    // Get form data
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var donationType = document.getElementById('donation').value;
    var address = document.getElementById('address').value;
    var message = document.getElementById('message').value;

    // Create email body content
    var emailBody = `
        <h3>Donation or Wastage Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Donation/Wastage:</strong> ${donationType}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Send email using SMTPJS
    Email.send({
        SecureToken: "33f35bd3-992c-4109-9b23-d0749503bfc6",  // Your SecureToken from smtpjs
        To: 'foundationcode13@gmail.com',                    // Recipient email
        From: "foundationcode13@gmail.com",                  // Sender email
        Subject: "New Donation or Wastage Request",          // Email subject
        Body: emailBody                                     // Email body content
    }).then(
        message => alert(message)                            // Success or failure message
    );
}
