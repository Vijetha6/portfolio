document.getElementById("contactForm").addEventListener("submit", function(e)
{
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
 
    const status = document.getElementById("formstatus");
 
 
if(!name || !email)
{
    status.textContent = "Please fill the fields";
    status.style.color = "red";
    return;
}
status.textContent = "Message sent";
    status.style.color = "green";
 
this.reset();
});