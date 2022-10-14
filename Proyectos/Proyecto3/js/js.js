var contador = 0;

var usuarioIngreso = document.getElementById("usuarioIngreso");
var passwordIngreso = document.getElementById("passwordIngreso");

var usuarioRegistro = document.getElementById("usuarioRegistro");
var selectRegistro = document.getElementById("selectRegistro");
var passwordRegistro = document.getElementById("passwordRegistro");

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

var usuarios = [
  ["usuario1", "12345", "Recursos Humanos"],
  ["usuario2", "12345", "Contabilidad"],
  ["usuario3", "12345", "Salud Ocupacional"],
  ["usuario4", "12345", "Contabilidad"],
  ["usuario5", "12345", "Sistemas"],
  ["usuario6", "12345", "Seguridad de la Información"],
  ["usuario7", "12345", "Automatización"],
  ["usuario8", "12345", "Procesos"],
  ["usuario9", "12345", "Gestión de la Demanda"],
  ["usuario10", "12345", "Desarrollo"],
];

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  console.log('ejecutando JS');
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  console.log('ejecutando JS');
});

function validarUsuario() {
  var usuario = usuarioIngreso.value;
  var password = passwordIngreso.value;

  var verificacion = verificarUsuario(usuario, password, true);

  if (usuario == "" || password == "") {
    alert("Recuerde que todos los datos son obligatorios. Por favor revise nuevamente");
  } else if (verificacion[0]) {
    document.getElementById("usuarioIngreso").value = "";
    document.getElementById("passwordIngreso").value = "";

    alert("Bienvenido " + usuario + ". Tu acceso permitido es: " + verificacion[1]);
    contador = 0;
  } else {
    alert(
      "Por favor revise su nombre de usuario, contraseña y/o acceso. Tiene " +
        (4 - contador) +
        " intento(s)."
    );
    contador++;
    if (contador == 5) {
      alert(
        "Por su seguridad el ingreso se ha desabilitado. En 30 segundos se volverá a habilitar."
      );
      document.getElementById("botonIngresar").classList.add("desabilitar");
      setTimeout(() => {
        document
          .getElementById("botonIngresar")
          .classList.remove("desabilitar");
        contador = 0;
      }, 30000);
    }
  }
}

function verificarUsuario(usuario,  password, auxiliar) {
  var bandera = false;
  var resultado = [];
  if (auxiliar) {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i][0] == usuario.toString() &&  usuarios[i][1] == password.toString()) {
        bandera = true;
        resultado[0] = bandera;
        resultado[1] = usuarios[i][2];
      }
    }
    return resultado;
  } else {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i][0] == usuario.toString()) {
        bandera = true;
      }
    }
    return bandera;
  }
}

function crearUsuario() {
  var usuario = usuarioRegistro.value;
  var ingreso = selectRegistro.value;
  var password = passwordRegistro.value;
  var usuarioNuevo = [];

  var verificacion = verificarUsuario(usuario, password, false);

  if (usuario == "" || ingreso == "Seleccione la opción del acceso" || password == "") {
    alert(
      "Recuerde que todos los datos son obligatorios. Por favor revise nuevamente"
    );
  } else if (verificacion) {
    alert("Este usuario ya está creado. Intente con otro nombre.");
  } else {
    alert("Usuario Registrado con éxito");
    usuarioNuevo = [usuario, password, ingreso];
    usuarios.push(usuarioNuevo);
    document.getElementById("usuarioRegistro").value = "";
    document.getElementById("selectRegistro").value = "";
    document.getElementById("passwordRegistro").value = "";
  }
}
