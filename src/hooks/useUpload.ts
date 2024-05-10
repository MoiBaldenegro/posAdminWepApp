/**
 * Este Hook tiene la finalidad de manejar el procesamiento de archivos de Excel para actualizar la base de datos.
 * Eliminará por completo la data existente y la reemplazará por la data del archivo cargado. Está dividido en las siguientes funciones:
 *
 * MODO DE USO
 * Se necesita pasarle la action de redux que maneja el axios para guardar los datos.
 * @param {Function} actionCallback - Action de redux correspondiente para guardar los datos.
 *
 * Los valores retornados es lo que necesitas en componente de Drop-Zone para procesar corectamente los archivos
 * @returns {object} - Un objeto con las siguientes propiedades:
 *   - `onDrop`: Función para asignar el archivo seleccionado.
 *   - `files`: El archivo seleccionado.
 *   - `handleUpload`: Función para procesar y cargar el archivo.
 *   - `resetFiles`: Función para limpiar la variable de archivos.
 */

import { useState } from 'react';
import { read, utils } from 'xlsx';
import { useDispatch } from 'react-redux';

const useUpload = (actionCallback) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState(null);

  const handleUpload = () => {
    console.log(files);
    if (!files) {
      alert('Por favor, selecciona un archivo.');
      return;
    }
    if (
      !(files instanceof Blob) ||
      !(files.name.endsWith('.xlsx') || files.name.endsWith('.xlsm'))
    ) {
      alert(
        'Por favor, selecciona un archivo de Excel válido (extensión .xlsx o .xlsm).',
      );
      return;
    }

    const data = new FormData();
    data.append('file', files);

    // Leemos el archivo
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      try {
        const workbook = read(data, { type: 'array' });

        // Procesamos las hojas del archivo
        workbook.SheetNames.forEach((sheetName) => {
          const sheet = workbook.Sheets[sheetName];
          const sheetData = utils.sheet_to_json(sheet);
          console.log(sheetData);
          dispatch(actionCallback(sheetData));
          setFiles(null);
        });
      } catch (error) {
        alert(
          'Error al procesar el archivo de Excel. Asegúrate de que el archivo sea válido.',
        );
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(files);
  };

  const onDrop = (acceptedFiles: any) => {
    setFiles(acceptedFiles[0]);
  };

  const resetFiles = () => {
    setFiles(null);
  };

  return {
    onDrop,
    files,
    handleUpload,
    resetFiles,
  };
};

export default useUpload;
