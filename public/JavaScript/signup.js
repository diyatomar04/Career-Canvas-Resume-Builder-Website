function openloginpg() {
    window.location.href = "/HTML/login.html";
 }


 signupform.addEventListener('submit', function(event) {
    event.preventDefault();
     window.location.href="/HTML/login.html";
 });
const signupform = document.getElementById('registertab');

signupform.addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('c_password').value;
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    //const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        document.getElementById('password').value='';
        document.getElementById('c_password').value='';
        return;
    }

    const data={
        fname: fname,
        email: email,
        password: password,
    };

    fetch('http://localhost:3000/signup_pg' ,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data),
    })

    .then(response =>response.json())

    .then(data =>{
        if(data.error){
            alert(data.error);
        }
        else{
            openloginpg();
        }
    })


  /*  if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }*/

    console.log('Signup form submitted');
    // Logic for backend signup process can be added here
});
