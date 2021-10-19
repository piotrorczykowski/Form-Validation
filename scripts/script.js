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

        if(!checkUsername())
        {
            usernameField.removeClass('success')
            usernameField.addClass('error')
            usernameField.next().text('Username must be between 3 and 25 characters')
        }
        else
        {
            usernameField.removeClass('error')
            usernameField.next().text('')
            usernameField.addClass('success')
        }

        if(!checkEmail())
        {
            emailField.removeClass('success')
            emailField.addClass('error')
            emailField.next().text('Invalid email address')
        }
        else
        {
            emailField.removeClass('error')
            emailField.next().text('')
            emailField.addClass('success')
        }

        if(!checkPassword())
        {
            passwordField.removeClass('success')
            passwordField.addClass('error')
            passwordField.next().text('Password mus has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character in (!@#$%^&*)')
        }
        else
        {
            passwordField.removeClass('error')
            passwordField.next().text('')
            passwordField.addClass('success')
        }

        if(!checkConfirmPassword())
        {
            passwordConfirmField.removeClass('success')
            passwordConfirmField.addClass('error')
            passwordConfirmField.next().text('Passwords are not the same')
        }
        else
        {
            passwordConfirmField.removeClass('error')
            passwordConfirmField.next().text('')
            passwordConfirmField.addClass('success')
        }
    });
});