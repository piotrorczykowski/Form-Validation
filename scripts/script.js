$(document).ready(function()
{
    const usernameField = $("#username");

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

    $('#submit').click(function(e)
    {
        e.preventDefault();

        checkUsername();
    });
});