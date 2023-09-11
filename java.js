const password = document.getElementById('password');
const togglesenha = document.getElementById('togglesenha');

togglesenha.addEventListener('click', () => {
    if(password.type === 'password') {
       password.type = 'text';
       togglesenha.innerHTML = '<i class="far fa-eye"></i>';
    } else {
        password.type = 'password';
        togglesenha.innerHTML = '<i class="far fa eye-slash"></i>';
    }
});