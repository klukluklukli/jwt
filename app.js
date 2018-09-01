app.controller('login', function(){

})

app.controller('register', function(){
  var nombreInput = document.getElementById('nombre');
  var apellidoInput = document.getElementById('apellido');
  var passwordInput = document.getElementById('password');
  var confirmaInput = document.getElementById('confirma');
  var buttonElement = document.getElementById('button');

  buttonElement.addEventListener('click', function(){
      var nombre = nombreInput.value;
      var apellido = apellidoInput.value;
      var password = passwordInput.value;
      var confirma = confirmaInput.value;
      alert("Tu nombre es " + nombre + ", tu apellido es " + apellido);

      if (nombre.length > 4) {
        console.log('Cool, tu nombre es válido');
      } else if(nombre.length < 4) {
        console.log('Dude tu nombre no es válido');
      } else {
        console.log('Ingresa un nombre válido');
      }

      if (password == confirma) {
        console.log('Tu contraseña es válida');
      } else if (password != confirma) {
        console.log('Tu contraseña no es válida');
      }

  });
})

app.route({
  name: 'login',
  templateURL: '/templates/login.html',
  url: '/login',
  controller: 'login'
})

app.route({
  name: 'register',
  templateURL: '/templates/register.html',
  url: '/register',
  controller: 'register'
})
