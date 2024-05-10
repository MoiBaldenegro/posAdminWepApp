import { useState } from 'react';

export default function useValidation() {
  const [message, setMessage] = useState('');
  const [secondMessage, setSecondMessage] = useState('');
  const [validate, setValidate] = useState('');
  const [secondValidate, setSecondValidate] = useState('');
  const [thirdValidate, setThirdValidate] = useState('');
  const [thirdMessage, setThirdMessage] = useState('');

  function validationRegisterFirst(data: any, lastName: any /* type user */) {
    const soloLetras = /^[a-zA-Z]+$/;

    // IMPEDIR ENVIAR VACIOS Y VERIFICAR SOLO LETRAS - Apellido paterno
    if (!lastName.first?.length) {
      setValidate('Apellido paterno no puede estar vacío');
      return;
    }

    if (lastName.first.length < 2 && lastName.first.length === 1) {
      setValidate('Apellido paterno no es valido');
      return;
    }

    if (!soloLetras.test(lastName.first)) {
      setValidate('Apellido paterno debe contener solo letras');
      return;
    }

    // IMPEDIR ENVIAR VACIOS Y VERIFICAR SOLO LETRAS - Apellido materno
    if (!lastName.second?.length) {
      setValidate('Apellido materno no puede estar vacío');
      return;
    }
    if (lastName.second.length < 2 && lastName.second.length === 1) {
      setValidate('Apellido materno no es valido');
      return;
    }

    if (!soloLetras.test(lastName.second)) {
      setValidate('Apellido materno debe contener solo letras');
      return;
    }

    // IMPEDIR ENVIAR VACIOS Y VERIFICAR SOLO LETRAS - Nombre(s)
    if (!data.name?.length) {
      setValidate('Nombre(s) no puede estar vacío');
      return;
    }

    if (data.name.length < 2 && data.name.length === 1) {
      setValidate('Nombre(s) no es valido');
      return;
    }

    if (!soloLetras.test(data.name)) {
      setValidate('Nombre(s) debe contener solo letras');
      return;
    }

    // VERIFICAR QUE LA FECHA Y EL TURNO ESTÉN PRESENTES
    if (!data.entryDate?.length) {
      setValidate('Asigna una fecha de ingreso');
      return;
    }

    if (!data.shift?.length) {
      setValidate('Se debe definir un turno antes de registrar');
      return;
    }

    // MAXIMOS NUMEROS DE CARACTERES
    if (lastName.first?.length > 35) {
      setValidate('Apellido paterno debe ser menor a 35 caracteres');
      return;
    }

    if (lastName.second?.length > 35) {
      setValidate('Apellido materno no debe ser menor a 35 caracteres');
      return;
    }

    if (data.name?.length > 35) {
      setValidate('Nombre(s) debe ser menor a 35 caracteres');
      return;
    }

    setValidate('');
  }

  // Esta validacion no fue necesaria permanece para su uso en le futuro y congruencia en la nomenclatura.
  function validationRegisterSecond(data: any, lastName: any /* type user */) {
    if (!data.role?.length) {
      setSecondValidate('Selecciona un perfil para el usuario');
      return;
    }
    setValidate('');
  }
  function validationRegisterThird(data: any, lastName: any /* type user */) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    const passRegex = /[A-Z]/; // Eliminado .* al principio y al final

    // VALIDACIONES DEL CORREO ELECTRONICO
    if (!data.email?.length) {
      setThirdValidate('El correo electrónico es requerido');
      return;
    }

    if (!emailRegex.test(data.email)) {
      setThirdValidate('La dirección de correo electrónico no es válida');
      return;
    }

    // VALIDACIONES DE CONTRASEÑA
    if (data.password?.length < 6) {
      setThirdValidate('La contraseña debe contener al menos 8 caracteres');
      return;
    }

    if (data.password?.length > 45) {
      setThirdValidate(
        'La contraseña debe contener entre 8 y 45 caracteres como máximo',
      );
      return;
    }

    if (!passRegex.test(data.password)) {
      setThirdValidate(
        'La contraseña debe contener al menos una letra mayúscula',
      );
      return;
    }

    // VALIDACIONES DEL PINPOS
    if (data.pinPos?.length !== 2 && data.pinPos?.length < 4) {
      setThirdValidate('Ingresa un pin de 4 dígitos');
      return;
    }

    // Si todas las validaciones son exitosas, puedes limpiar los mensajes de error
    setThirdValidate('');
  }

  return {
    validationRegisterFirst,
    validationRegisterThird,
    message,
    validate,
    secondValidate,
    setMessage,
    validationRegisterSecond,
    secondMessage,
    setSecondMessage,
    thirdMessage,
    thirdValidate,
    setThirdMessage,
  };
}
