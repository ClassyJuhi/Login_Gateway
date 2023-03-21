function auth()
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if(username=="training@jalaacademy.com" && password=="jobprogram")
    {
      window.location.assign("https://magnus.jalatechnologies.com/Home/Index");
      alert("login Successfully");
    }
    else
    {
       alert("Invalid UserName or Password");
       return;
    }
}
