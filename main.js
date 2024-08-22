let inputTexto = document.querySelector("#entradaTexto");
let cardContainer = document.querySelector(".card-container");

let btnEncriptar = document.querySelector(".encriptar");
let btnDesencriptar = document.querySelector(".desencriptar");

btnEncriptar.addEventListener("click", () => {
  if (inputTexto.value === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }
  cardContainer.innerHTML = "";
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div class="card-body">
          <p class="card-text">${encriptar(inputTexto.value)}</p>
      </div>
      <div class="card-footer">
          <button class="secondary-button button-copy">Copiar</button>
      </div>
    `;
  inputTexto.value = "";
  cardContainer.appendChild(card);
  let cardBody = document.querySelector(".card-body");
  cardBody.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto encriptado
  card.querySelector(".button-copy").addEventListener("click", () => {
    let texto = card.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
  });
});

function encriptar(texto) {
  // Codificar el texto en un Uint8Array
  const encoder = new TextEncoder();
  const view = encoder.encode(texto);

  // Convertir Uint8Array a una cadena de números en formato hexadecimal
  const hexArray = Array.from(view).map(byte => byte.toString(16).padStart(2, '0')).join(' ');

  // Retornar el texto encriptado en formato hexadecimal
  return hexArray.toUpperCase();
  
}

btnDesencriptar.addEventListener("click", () => {
  if (inputTexto.value === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }
  cardContainer.innerHTML = "";
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <div class="card-body">
            <p class="card-text">${desencriptar(inputTexto.value)}</p>
        </div>
        <div class="card-footer">
          <button class="secondary-button button-copy">Copiar</button>
        </div>
      `;
  inputTexto.value = "";
  cardContainer.appendChild(card);
  let cardBody = document.querySelector(".card-body");
  cardBody.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto desencriptado
  card.querySelector(".button-copy").addEventListener("click", () => {
    let texto = card.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
  });
});

function desencriptar(textoEncriptado) {
  const hexArray = textoEncriptado.split(' ');

    // Convertir el array de hexadecimales a un Uint8Array
    const byteArray = new Uint8Array(hexArray.map(byte => parseInt(byte, 16)));

    // Decodificar el Uint8Array de vuelta a un texto
    const decoder = new TextDecoder();
    const texto = decoder.decode(byteArray);

    return texto;
}

