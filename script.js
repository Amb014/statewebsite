document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var verifyemail = document.getElementById('verifyemail');

    function validateEmailEntered() {
        
        if (email.value !== verifyemail.value) {
            verifyemail.setCustomValidity('Email addresses must match.');

            
            verifyemail.style.borderColor = 'red';

            
            alert('The email you have entered does not match. Please try again.');
        } else {
            verifyemail.setCustomValidity('');

            
            verifyemail.style.borderColor = 'green';

            
            alert('Successful Match. Thank YOu');


        }
    }

    email.addEventListener('change', validateEmailEntered);
    verifyemail.addEventListener('change', validateEmailEntered);
});