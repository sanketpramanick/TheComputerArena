
function validateReg()
{
	var frm = document.getElementById("form");
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["user"].value;
    var pass = document.forms["form"]["pass"].value;
    var cpass = document.forms["form"]["cpass"].value;
    if(name === "")
    {
        alert("Name must be filled out");
        name.focus();
    }
    else if(email === "")
    {
        alert("Username must be filled out");
        email.focus();
    }
    else if(pass === "")
    {
        alert("Password must be filled out");
        pass.focus();
    }
    else if(cpass === "")
    {
        alert("Passowrd must be confirmed");
        cpass.focus();
    }
    else if(pass!==cpass)
    {
        alert("Passowrd does not match");
        cpass.focus();
    }
    else if(pass.length<6)
    {
        alert("Password must contain at least six characters");
        pass.focus();
    }
    else if (!(/[0-9]/.test(pass)))
    {
        alert("Password must contain at least one number (0-9)");
        pass.focus();
    }
    else if (!(/[a-z]/.test(pass)))
    {
        alert("Password must contain at least one lowercase letter (a-z)");
        pass.focus();
    }
    else if (!(/[A-Z]/.test(pass)))
    {
        alert("Password must contain at least one uppercase letter (A-Z)");
        pass.focus();
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        alert("Please enter a valid e-mail address");
        email.focus();
    }
    else
    {
        //alert("Success");
		frm.action="Register";
		frm.method="POST";
		frm.submit();
    }
}
