document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', register);
});

function register(event) {
    event.preventDefault(); 

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (!firstname || !lastname || !username || !email || !address || !phone || !password) {
        alert('Please enter your information!');
        return;
    }


    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful');
    
    window.location.href = 'Login.html'; 
};