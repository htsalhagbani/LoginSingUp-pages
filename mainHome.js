let nameparse = new URLSearchParams(window.location.search);
let userName=document.getElementById('userName');
let userNameinput = nameparse.get('name');

userName.textContent=`Hello, ${userNameinput}`;

function logout() {
    window.location.href = 'login.html'; 
}