import "./css/style.css";
import { Usuario } from "./clase";
import { agregarEstilo, quitarEstilo } from "./cambiarEstilos";

document
  .querySelector("form")
  ?.addEventListener("submit", (e) => e.preventDefault());

const regex = {
  usuario: /^(?=.*[a-z]).{8,}$/,
  contra: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#&%$]).{8,}$/,
  numero: /^(?=.*\d).{8,}$/,
};

const crearCuentaBtn = document.getElementById("CC");
const usuarioNombre = document.getElementById("usuario") as HTMLInputElement;
const usuarioContra = document.getElementById("contra") as HTMLInputElement;
const usuarioNumero = document.getElementById("numero") as HTMLInputElement;
const contenedorContra = document.getElementById(
  "contenedor-contra"
) as HTMLDivElement;
const contenedorUsuario = document.getElementById(
  "contenedor-usuario"
) as HTMLDivElement;
const contenedorNumero = document.getElementById(
  "contenedor-numero"
) as HTMLDivElement;

crearCuentaBtn?.addEventListener("click", () => {
  const nombre = usuarioNombre.value;
  const contra = usuarioContra.value;
  const numero = usuarioNumero.value;

  const usuario01 = new Usuario(nombre, contra, parseInt(numero));

  if (nombre.length >= 5 && numero.length >= 9 && regex.contra.test(contra)) {
    const usuarioCompleto = {
      nombre: usuario01.nombre,
      contra: usuario01.contra,
      numero: usuario01.numero,
    };

    localStorage.setItem(
      `user${Usuario.usuarioCreados}`,
      JSON.stringify(usuarioCompleto)
    );
  } else {
  }
});

usuarioNombre.addEventListener("keyup", () => {
  const nombre = usuarioNombre.value;

  if (regex.usuario.test(nombre)) {
    agregarEstilo(contenedorUsuario, "contenedor-input-correcto");
    quitarEstilo(contenedorUsuario, "contenedor-input-incorrecto");
  } else {
    agregarEstilo(contenedorUsuario, "contenedor-input-incorrecto");
    quitarEstilo(contenedorUsuario, "contenedor-input-correcto");
  }
});

usuarioContra.addEventListener("keyup", () => {
  const contra = usuarioContra.value;

  if (regex.contra.test(contra)) {
    agregarEstilo(contenedorContra, "contenedor-input-correcto");
    quitarEstilo(contenedorContra, "contenedor-input-incorrecto");
  } else {
    agregarEstilo(contenedorContra, "contenedor-input-incorrecto");
    quitarEstilo(contenedorContra, "contenedor-input-correcto");
  }
});

usuarioNumero.addEventListener("keyup", () => {
  const numero = usuarioNumero.value;

  if (regex.numero.test(numero)) {
    agregarEstilo(contenedorNumero, "contenedor-input-correcto");
    quitarEstilo(contenedorNumero, "contenedor-input-incorrecto");
  } else {
    agregarEstilo(contenedorNumero, "contenedor-input-incorrecto");
    quitarEstilo(contenedorNumero, "contenedor-input-correcto");
  }
});
