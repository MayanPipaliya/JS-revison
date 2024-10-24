let handeldata = (e) => {
    e.preventDefault();

    let data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value
    }
    
    let userpettern = /^[A-Z][a-zA-Z0-9]{1,}$/;
    if(!userpettern.test(data.username)) {
        alert("Enter a valid name, first latter always be capital !!")
        return; 
    }

    let phonePattern = /^(?:\+91|91)?[6789]\d{9}$/;
    if(!phonePattern.test(data.phone)) {
        alert("Enter a valid phone number!!")
        return; 
    }

    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordPattern.test(data.password)) {
        alert("Enter a valid password, it should contain at least 8 characters, including uppercase, lowercase, numbers and special characters!!")
        return; 
    }
}

document.getElementById("userdata").addEventListener("submit", handeldata);