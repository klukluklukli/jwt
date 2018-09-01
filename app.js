app.defaultRoute = '/register';

app.controller('login', function($){

  var emailInput = $('#email');
  var passwordInput = $('#password');

  $('#button').addEventListener('click', function() {

    var errors = [];

    // si la contraseña es incorrecta
    if (!(/^\w+@\w+\.+[a-z]?/.test(emailInput.value))) {
      // mostrar el error
      errors.push('Escribe un correo valido pls')
    }

    // si los passwords no son correctos
    if (passwordInput.value.length < 4) {
      errors.push('La contraseña no es válida');
    }

    if ($('.card-panel')) {
      $('.card-panel').parentElement.removeChild($('.card-panel'))
    }

    if (errors.length > 0) {
      errorMessage(errors)
      return;
    }


    // TODO mandar datos al servidor
    alert('salu2 todo bien')

    function errorMessage(errors) {

      var msg = '';
      for (err of errors) {
        msg += err + '<br>'
      }

      $('.container').appendChild(
        $.createElement(
          'div',
          'card-panel teal',
          '',
          $.createElement(
            'span',
            'white-text',
            msg
          )
        )
      );
    }
  });
})

app.controller('register', function($){

  var usernameInput = $('#nombre');
  var emailInput = $('#email');
  var passwordInput = $('#password');
  var confirmaInput = $('#confirma');

  $('#button').addEventListener('click', function() {

    var errors = [];

    // si username es menor a 4
    if (usernameInput.value.length < 4) {
      // mostrar el error
      errors.push('Nombre invalido, escribe un nombre de usuario con una longitud de almenos 4 caracteres')
    }

    // si la contraseña es incorrecta
    if (!(/^\w+@\w+\.+[a-z]?/.test(emailInput.value))) {
      // mostrar el error
      errors.push('Escribe un correo valido pls')
    }

    // si los passwords no son correctos
    if (passwordInput.value.length < 4 || confirmaInput.value.length < 4) {
      errors.push('Las cotraseñas no son validas');
    } else {
      if (passwordInput.value !== confirmaInput.value) {
        // mostrar el error
        errors.push('Las contraseñas no coinciden uwu.')
      }
    }

    if ($('.card-panel')) {
      $('.card-panel').parentElement.removeChild($('.card-panel'))
    }

    if (errors.length > 0) {
      errorMessage(errors)
      return;
    }


    // TODO mandar datos al servidor
    alert('salu2 todo bien')

    function errorMessage(errors) {

      var msg = '';
      for (err of errors) {
        msg += err + '<br>'
      }

      $('.container').appendChild(
        $.createElement(
          'div',
          'card-panel teal',
          '',
          $.createElement(
            'span',
            'white-text',
            msg
          )
        )
      );
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
