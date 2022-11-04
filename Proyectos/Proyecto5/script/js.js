window.onload = iniciarWebCam;

function iniciarWebCam(){
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const errorMsgElement = document.querySelector('span#errorMsg');
  const constraints = {
  audio: true,
  video: {width: 680, height: 480}
  };
  async function init() {
  try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
  } catch (e) {
      console.log(e);
  }
  }
  function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
  }
  init();
}

//audio
/*function Audio_Disp() {
  let audioIN = { audio: true };
  navigator.mediaDevices
    .getUserMedia(audioIN)
    .then(function (mediaStreamObj) {
      let audio = document.querySelector("audio");
      if ("srcObject" in audio) {
        audio.srcObject = mediaStreamObj;
      } else {
        audio.src = window.URL.createObjectURL(mediaStreamObj);
      }
      audio.onloadedmetadata = function () {
        audio.play();
      };
      let start = document.getElementById("btnStart");
      let stop = document.getElementById("btnStop");
      let playAudio = document.getElementById("adioPlay");
      let mediaRecorder = new MediaRecorder(mediaStreamObj);
      start.addEventListener("click", function () {
        mediaRecorder.start();
      });
      stop.addEventListener("click", function () {
        mediaRecorder.stop();
      });
      mediaRecorder.ondataavailable = function (ev) {
        dataArray.push(ev.data);
      };
      let dataArray = [];
      mediaRecorder.onstop = function (ev) {
        let audioData = new Blob(dataArray, { type: "audio/mp3;" });
        dataArray = [];
        let audioSrc = window.URL.createObjectURL(audioData);
        playAudio.src = audioSrc;
      };
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });
}*/


//imagenes
var pelota = document.getElementById("pelota");
var jugador1 = document.getElementById("jugador1");
var jugador2 = document.getElementById("jugador2");

var turno = 0;
var puntoJugador1 = 0;
var puntoJugador2 = 0;

var textoJugador1 = document.getElementById("punto1");
var textoJugador2 = document.getElementById("punto2");

var xPelota = 5;
var yJugador1 = 45;
var yJugador2 = 45;
var bandera = 0;

var animacion = document.getElementById("anotacion");

function lanzar() {
  bandera = 0;
  let auxiliar = turno % 2;
  if (auxiliar == 0) {
    tipo = "Jugador1";
    timer1(tipo);
  } else {
    tipo = "Jugador2";
    timer2(tipo);
  }
  turno++;
}

function timer1(tipo) {
  let playAudio = document.getElementById("adioPlay");
  if (tipo == "Jugador1" && xPelota == 5) {
    xPelota = 92;
    pelota.style.left = xPelota + "%";
  }
  if (tipo == "Jugador1" && yJugador1 > 45 && yJugador1 <55 && xPelota == 92)
    if (bandera == 0) {
      animacion.classList.remove("ocultar");
      animacion.classList.add("mostrar");
      setTimeout(() => {
        animacion.classList.add("ocultar");
        animacion.classList.remove("mostrar");
      }, 1000);
      puntoJugador1++;
      textoJugador1.textContent = "Player #1 | " + puntoJugador1;
      bandera = 1;
    }
}

function timer2(tipo) {
  let playAudio = document.getElementById("adioPlay");
  if (tipo == "Jugador2" &&  xPelota == 92) {
    xPelota = 5;
    pelota.style.left = xPelota + "%";    
  }
  if (tipo == "Jugador2" && yJugador2 > 45 && yJugador2 < 55 && xPelota == 5) {
    if (bandera == 0) {
      animacion.classList.remove("ocultar");
      animacion.classList.add("mostrar");
      setTimeout(() => {
        animacion.classList.add("ocultar");
        animacion.classList.remove("mostrar");
      }, 1000);
      puntoJugador2++;
      textoJugador2.textContent = puntoJugador2 + " | Player #2";
      bandera = 1;
    } else {
    }
  }
}

function bajar() {
  if (turno % 2 == 0) {
    if (yJugador1 >= 10 && yJugador1 <= 70) {
      jugador1.style.top = yJugador1 + "%";
      pelota.style.top = yJugador1 + "%";
      yJugador1 = yJugador1 + 1;
    }
  }
  if (turno % 2 !== 0) {
    if (yJugador2 >= 10 && yJugador2 <= 70) {
      jugador2.style.top = yJugador2 + "%";
      pelota.style.top = yJugador2 + "%";
      yJugador2 = yJugador2 + 1;

    }
  }
}

function subir() {
  if (turno % 2 == 0) {
    if (yJugador1 >= 12 && yJugador1 < 72) {
      yJugador1 = yJugador1 - 1;
      jugador1.style.top = yJugador1 + "%";
      pelota.style.top = yJugador1 + "%";

    }
  }
  if (turno % 2 !== 0) {
    if (yJugador2 >= 12 && yJugador2 < 72) {
      yJugador2 = yJugador2 - 1;
      jugador2.style.top = yJugador2 + "%";
      pelota.style.top = yJugador2 + "%";
    }
  }
}
