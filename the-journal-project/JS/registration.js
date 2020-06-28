function checkpassword(form)
{ 
    p1 = form.password.value; 
    p2 = form.password1.value; 
    if (p1 != p2) 
    { 
        alert ("\nPassword did not match. Please try again...");
        return false; 
    }  
    else
    {
        alert("Password match!!");
    }
} 
function alert_fun()
{
    alert("Account created successfully! Login to become a Journalist.");
}