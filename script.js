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

    const bombs = getRandomNumberList();
    console.log(bombs);

    
    let sumClicks = -1;

    // populate all 100 slots in grid
    for (let i = 1 ; i <= 100 ; i++){
        const newCell = createElement("div", "cell");
        let number = i
        newCell.innerHTML = (number);

        // What happens at click
        newCell.addEventListener ("click", function() {

            if (newCell.classList.contains("selected")){
                console.log("you already clicked here!");
            } else {
                newCell.classList.add("selected");
                sumClicks++;
                if ( sumClicks === (sumClicks - bombs.length)){
                    alert("You Won!");
                    gridElement.innerHTML = "" ;
                }
            }
 
            if (bombs.includes(i)){
                newCell.classList.add("explode");
                alert("You died!");
                console.log(`You've totalized ${sumClicks} points!`);
                gridElement.innerHTML = "" ;
            } 
        
        }); 
        
        gridElement.appendChild(newCell);
    }

    //create cells
    function createElement(tagName, className){
        const cellElement = document.createElement(tagName);
        cellElement.className = className;

        return cellElement;
    }
    
    function getRandomNumberList(){
        const numberList = [];

        while (numberList.length < 16){
            const randomNumber = getRandomNumber(1,100);
            if (!numberList.includes(randomNumber)){
                numberList.push(randomNumber);
            }
        }

        return numberList;
    }

    function getRandomNumber (minNumber, maxNumber){
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        return parseInt(randomNumber);

}


});