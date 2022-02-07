/* MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3,
per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. (come nell’esempio allegato) */


const wrapper = document.getElementById("wrapper");  // identifichiamo l'id del wrapper
//console.log(wrapper)

for (let i = 1; i <101; i++) {  
    let squareNumber = document.createElement('div');
    wrapper.append(squareNumber);
    squareNumber.classList.add('number');
    //console.log(i)

    //MILESTONE 1
    if (i % 15 === 0) {                          //Controllo numero divisibile per 15       
        squareNumber.classList.add('fizzbuzz');  //MILESTONE 3
        squareNumber.append('fizzbuzz');         //MILESTONE 2
    } 
        
        else if (i % 3 === 0) {                 //Controllo numero divisibile per 3
            squareNumber.classList.add('fizz'); //MILESTONE 3
            squareNumber.append('fizz');        //MILESTONE 2
            
        } 
        
        else if (i % 5 === 0) {                 //Controllo numero divisibile per 5
            squareNumber.classList.add('buzz'); //MILESTONE 3
            squareNumber.append('buzz');        //MILESTONE 2
        } 
        
        else {
            squareNumber.append(i);             //MILESTONE 2
        }




}   



























