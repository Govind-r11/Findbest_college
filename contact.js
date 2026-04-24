const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    const mobile = document.querySelector('input[name="number"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const name = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

     const education = document.querySelector('input[name="class"]:checked');
     const subjects = document.querySelectorAll('input[name="Subject[]"]:checked');
     const state = document.querySelector('select[name="State"]').value;

    
    if(mobile === "" || email === "" || name === "" || password === ""){
        alert("Fullfill All the Sections!");
        e.preventDefault();
        return;
    }

    
    if(mobile.length !== 10){
        alert("invalid mobile no.!");
        e.preventDefault();
        return;
    }

    
    if(!email.includes("@") || !email.includes(".")){
        alert("invalid Email!");
        e.preventDefault();
        return;
    }

    
    if(password.length < 6){
        alert("Password must be 6 digits!");
        e.preventDefault();
        return;
    }

    
    if(!education){
        alert("Select Your Current education!");
        e.preventDefault();
        return;
    }

    
    if(subjects.length === 0){
        alert("Select your intrested field!");
        e.preventDefault();
        return;
    }

    
    if(state === "none"){
        alert("Select your State to College!");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully 🎉");
});
