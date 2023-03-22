import cipher from './cipher.js';

console.log(cipher);
 

    const originalInput = document.getElementById("mensajeacifrar1");
  const shiftInput = document.getElementById("numeroacifrar1");
   const encryptedInput = document.getElementById("cifrado");
 const botonCif= document.getElementById("cifrar2");
 botonCif.addEventListener("click",function(){
  const inputValue=originalInput.value;
  let shiftValue=shiftInput.value;
  const result=cipher.encode(inputValue,shiftValue);
   encryptedInput.value=result;
     console.log("Prueba")
   });


  const originalInput2 = document.getElementById("mensajeadescifrar1");
  const shiftInput2 = document.getElementById("numeroadescifrar1");
  const encryptedInput2 = document.getElementById("descifrado");
  const BotonDescif= document.getElementById("descifrar2");
  BotonDescif.addEventListener("click",function(){

        let inputValue2=originalInput2.value;
        let shiftValue2=shiftInput2.value;
        const result2=cipher.decode(inputValue2,shiftValue2);
        encryptedInput2.value=result2;
        console.log("Prueba2")

      });

    


