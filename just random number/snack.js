
function getRandomNumberList(){
    const numberList = [];

    while (numberList.length < 4){
        const randomNumber = getRandomNumber(1,5);
        if (!numberList.includes(randomNumber)){
            numberList.push(randomNumber);
        }
    }

    return numberList;
}

console.log(getRandomNumberList());

function getRandomNumber (minNumber, maxNumber){
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return randomNumber;

}
