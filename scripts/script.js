$(document).ready(function()
{
    const usernameField = $('#username');
    const emailField = $('#email');
    const passwordField = $('#password');
    const passwordConfirmField = $('#confirm-password');

    const isBlank = name => name == '' ? true : false;
    const isBetween = (lenght, min, max) => lenght < min || lenght > max ? false : true;

    function checkUsername()
    {
        const username = usernameField.val().trim();

        if(!isBlank(username) && isBetween(username.length, 3, 25))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const isEmailValid = email => {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(email);
    };

    function checkEmail()
    {
        const email = emailField.val().trim();

        if(!isBlank(email) && isEmailValid(email))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const isPasswordSecure = password => {
        const regularExpression = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return regularExpression.test(password);
    }

    function checkPassword()
    {
        const password = passwordField.val().trim();
 
        if(!isBlank(password) && isPasswordSecure(password))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function checkConfirmPassword()
    {
        const passwordConfirm = passwordConfirmField.val().trim();
        const password = passwordField.val().trim();

        if(!isBlank(passwordConfirm) && passwordConfirm === password)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    $('#submit').click(function(e)
    {
        e.preventDefault();

        checkUsername();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
    });
});