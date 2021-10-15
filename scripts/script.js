$(document).ready(function()
{
    const usernameField = $('#username');
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
        checkPassword();
        checkConfirmPassword();
    });
});