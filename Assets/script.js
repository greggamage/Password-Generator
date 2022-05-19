function randomLower(){ //This function is using random numbers from 97 up to 122, this is the char ASCII code numbers for all lower case letters.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper(){ //This function is using random numbers from 65 up to 90, this is the char ASCII code numbers for all upper case letters.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber(){ //This function is using random numbers from 48 to 57, this is the char ASCII code numbers for all numbers.
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial(){ //This function does not use random numbers and is instead using an array, withing the array it is getting a randomly generated number
    // and going to that random index of the string containing all of the special characters.
    const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
    return symbols[Math.floor(Math.random() * symbols.length)]

}
// ---------------------------------------------- ALL FUNCTIONS USED THROUGHOUT PROGRAMS ARE DEFINED FROM LINES 2 THROUGH 18 ----------------------------------



// AFTER GENERATE BUTTON BEING CLICKED, ALL CODE FROM LINES 40 through ## Run, These lines are all of the prompts and making sure there is a proper answer provided.
document.getElementById('generate').addEventListener('click', () => {
    let passLowerboo = false;
    let passUpperboo = false;
    let passNumboo = false;
    let passSpecialboo = false;
    let passWord = [];

// --------------------------------PROMPT MESSAGES AND INPUTS--------------------------------------------
    let passLength = prompt('Enter the length of password you want, from 8 characters up to 128.')
    passLength = parseInt(passLength);
    if (passLength >= 8 && passLength <= 128){
        console.log("Expecting " + passLength + " Characters");
    } else {
        passLength = prompt('Please enter another number that is 8 through 128')
    }

  
    let passLower = prompt('Would you like Lower case letters?' + "\n" + " Enter y for yes and n for no")
    if (passLower === 'y') {
        passLowerboo = true;


    } else if (passLower === 'n') {
        console.log('Not including passLower');
    } else {
        passLower = prompt("Please try again and enter either y for yes or n for no")
    }


    let passUpper = prompt('Would you like Upper case letters?' + "\n" + " Enter y for yes and n for no")
    if (passUpper === 'y') {
        passUpperboo = true;


    } else if (passUpper === 'n') {
        console.log('Not including passUpper');
    } else {
        passUpper = prompt("Please try again and enter either y for yes or n for no")
    }

  
    let passNum = prompt('Would you like to include Numbers?' + "\n" + " Enter y for yes and n for no")
    if (passNum === 'y') {
        passNumboo = true;



    } else if (passNum === 'n') {
        console.log('Not including passNum');
    } else {
        passNum = prompt("Please try again and enter either y for yes or n for no")
    }
  

    let passSpecial = prompt('Would you like Special characters?' + "\n" + " Enter y for yes and n for no")
    if (passSpecial === 'y') {
        passSpecialboo = true;



    } else if (passSpecial === 'n') {
        console.log('Not including passSpecial');
    } else {
        passSpecial = prompt("Please try again and enter either y for yes or n for no")
    }

    
  // FOR LOOP BEGINS TO START ADDING EACH RANDOM CHARACTER INTO AN INDEX
    for (let i =0; i < passLength; i++){

       let randomIndex = (Math.floor(Math.random() * 4));
       

       for (let k = 0; k <= 2; k++) { //  keeps looping if condition is not met, once the condition of if the input was what we wanted, it stops looping

        if(randomIndex == 0 && passLowerboo == true){
            let generation = randomLower();
            passWord.push(generation);
            k = 2;
        } else if (randomIndex == 1 && passUpperboo == true){
            let generation = randomUpper();
            passWord.push(generation);
            k = 2;

        } else if(randomIndex == 2 && passNumboo == true){
            let generation = randomNumber();
            passWord.push(generation);
            k = 2;

        } else if(randomIndex == 3 && passSpecialboo == true){
            let generation = randomSpecial();
            passWord.push(generation);
            k = 2;

        } else {
            k = 0;
            randomIndex = (Math.floor(Math.random() * 4));
        }

           
       }


    }

    document.getElementById('password').innerHTML = passWord.join("");
    console.log(passWord);
    alert("You answered the criteria as: " + "\n" + passLength + " characters for the length" + "\n" + passLower + " for Lower case letters" + "\n" + passUpper + " for Upper case letters" + "\n" + passNum + " for if you would like to include numbers" + "\n" + passSpecial + " for Special characters")
  })



