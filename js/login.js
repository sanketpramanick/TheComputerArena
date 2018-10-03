function validateLogin()
{
    var frm = document.getElementById("form");
    var user = document.forms["form"]["uname"].value;
    var pswd = document.forms["form"]["psw"].value;
    if(user === "")
    {
        alert("User Name must be filled out");
        user.focus();
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user)))
    {
        alert("Please enter a valid e-mail address");
        email.focus();
    }
    else if(pswd === "")
    {
        alert("Password must be filled out");
        pswd.focus();
    }
    else
    {
        // alert("Success");
        frm.action="Login";
		frm.method="POST";
		frm.submit();
    }
}