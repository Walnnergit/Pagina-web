
// REDIRECCIÓN AL HACER LOGIN
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault()
    // Validación simple (opcional)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value
    if(email && password) {
        // Redirige a la página principal (la del sidebar)
        window.location.href = "dashboard.html";
    } else {
        alert('Por favor ingresa tu usuario y contraseña');
    }
});
