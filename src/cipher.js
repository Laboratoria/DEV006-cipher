
// function shiftLetter (letter,shift){
//   let newLetter="";

//   const letterCode=letter.charCodeAt(0);
//   let newLetterCode= (letterCode+ shift-65) % 26 +65 ;

//   if (newLetterCode<97){
//     newLetter+=26;
//   }else if(newLetterCode>122){
//     newLetterCode-=26;
//   }
//   newLetter=String.fromCharCode(newLetterCode);

//   return newLetter;
// }

function shiftLetter2 (letter2,shift2){
  let newLetter2="";

  const letterCode2=letter2.charCodeAt(0);
  let newLetterCode2= (letterCode2- shift2+65) % 26 +65 ;

  if (newLetterCode2<97){
    newLetterCode2+=26;
  }else if(newLetterCode2>122){
    newLetterCode2-=26;
  }
  newLetter2=String.fromCharCode(newLetterCode2);

  return newLetter2;
}




const cipher = {
  encode: function(message, shift) {
    let encryptedMessage = "";

    console.log(typeof shift)

    const listletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    for ( const letter of message) {
      if (!listletters.includes(letter)) {
        console.log("ok");
      }else{
        let newLetter="";

        const letterCode=letter.charCodeAt(0);
        let newLetterCode= (letterCode+ shift-65) % 26 +65 ;


        if(newLetterCode>122){
          newLetterCode-=26;
        }
        newLetter=String.fromCharCode(newLetterCode);

        encryptedMessage+=newLetter;

        console.log(encryptedMessage);
      }}
    console.log(encryptedMessage);
    return encryptedMessage;
  },
  decode: function(message2, shift2) {
    let encryptedMessage2 = "";


    const arreglo2 =message2.split("")
    console.log(message2.split(""))
    const listletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for ( const letter2 of arreglo2) {
      if (!listletters.includes(letter2)) {
        continue;
      }
      encryptedMessage2 += shiftLetter2(letter2, shift2);
    }

    return encryptedMessage2;
  },
};

export default cipher;





















// //     function inicio() {

// //       document.getElementById("mensajeacifrar1").addEventListener("keyup",function(){
// //             this.value= this.value.toLowerCase();

// //       },true);

// //       document.getElementById("mensajeadescifrar1").addEventListener("Keyup",function(){
// //         this.value= this.value.toLowerCase();

// //       },true);

// //       document.getElementById("cifrar2").addEventListener("click",function(){
// //         let mensajeOriginal =document.getElementById("mensajeacifrar1").value;
// //         let posiciones=document.getElementById("numeroacifrar1").value;
// //         document.getElementById("cifrado").value= cifrar(mensajeOriginal,posiciones)
// //       },true);

// //         document.getElementById("descifrar2").addEventListener("click",function(){
// //       let mensajeOriginal2 =document.getElementById("mensajeadescifrar1").value;
// //       let posiciones2=document.getElementById("numeroadescifrar1").value;
// //       document.getElementById("descifrado").value= descifrar(mensajeOriginal2,posiciones2)
// //         },true);
// //     }

// //    function cifrar(mensajeOriginal,posiciones){
// //     let resultadoCifrado= "";
// //     let letras ="abcdefghijklmnopqrstuvwxyz";

// //     posiciones=(posiciones % 26+26) %26 ;

// //     posiciones2=(posiciones2 % 26+26) %26 ;

// // if(mensajeOriginal){
// //   for(let i=0; i<mensajeOriginal.length; i++){
// //       if (letras.indexOf(mensajeOriginal(i)) !=-1){
// //         let posicion=((letras.indexOf(mensajeOriginal[i])+posiciones)%26);
// //         resultadoCifrado+= letras[posicion];

// //       } else
// //           resultadoCifrado+= mensajeOriginal[i];

// //   }
// //    }
// // return resultadoCifrado
// //    }

