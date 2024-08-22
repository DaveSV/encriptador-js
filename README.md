# encriptador-js

![Captura de pantalla 2024-08-21 190001](https://github.com/user-attachments/assets/75d78bbf-6dcf-4677-8fa4-e4e7b8159a0d)

Explicación:
HTML Estructura:

Un campo de texto (<textarea>) donde el usuario ingresa el texto original o encriptado.
Dos botones: uno para encriptar y otro para desencriptar.
Un contenedor (<div id="output">) donde se muestra el resultado de la encriptación o desencriptación.
Funciones JavaScript:

encriptar(texto): Convierte el texto a UTF-8 y lo transforma en una cadena de números hexadecimales.
desencriptar(textoEncriptado): Toma el texto encriptado y lo convierte de nuevo a su forma original.
encriptarTexto(): Obtiene el texto ingresado, lo encripta y muestra el resultado en la página.
desencriptarTexto(): Obtiene el texto encriptado, lo desencripta y muestra el texto original en la página.
Uso:

El usuario ingresa el texto en el campo de texto y presiona "Encriptar" para obtener el texto encriptado.
El usuario puede pegar el texto encriptado en el mismo campo de texto y presionar "Desencriptar" para recuperar el texto original.

Espacio de trabajo: https://stackblitz.com/~/github.com/DaveSV/encriptador-js
