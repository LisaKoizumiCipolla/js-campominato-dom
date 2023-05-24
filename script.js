/**
 * Generare la griglia
 * Farla partire con il button
 * Aggiungere il reset quando si clicca il button per ripulire il campo
 * Generare 16 numeri randomici
 * Fare in modo che quando sia cliccata la casella corrispondente ad uno dei numeri generati, la casella cambi colore e la partita finisce
 * Quando sono cliccate tutte le caselle cliccabili il gioco finisce
 * Alla fine della partita comunicare il punteggio (numero di caselle cliccate)
 */


//input button
const button = document.getElementById('button');

//click on button to reset
button.addEventListener('click', function () {

    // get base grid
    const gridElement = document. getElementById("grid");
    gridElement.innerHTML = "" ;
    gridElement.classList.add("grid");


    // populate all 100 slots in grid and add effect on click
    for (let i = 1 ; i <= 100 ; i++){
        const newCell = createElement("div", "cell");
        let number = i
        newCell.innerHTML = (number);

        newCell.addEventListener ("click", function() {
            newCell.classList.toggle("selected");
            console.log(number);
        }); 
        
        gridElement.appendChild(newCell);
    }

    //create cells
    function createElement(tagName, className){
        const cellElement = document.createElement(tagName);
        cellElement.className = className;

        return cellElement;
    }

});