document.addEventListener('DOMContentLoaded', function() {
    // Use buttons to toggle between views
    document.querySelector('#Ingles').addEventListener('click', () => redirect() );


});

function redirect(){
    document.querySelector('#Español').click();
    window.location.href = 'https://tomasp92.github.io/en/';
}
