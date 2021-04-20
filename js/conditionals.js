(function (){
    'use strict';
    console.log('test');
    /* ########################################################################## */
    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    let analyzeColor = (color) => {
        if (color === 'red'){
            return `${color}, like Strawberries`;
        } else if (color === 'blue'){
            return `${color}, like the vast and unexplored oceans`;
        } else if (color === 'green'){
            return `${color}, like the Microsoft valley wallpaper`;
        } else {
            return `I don't know of this color "${color}", sorry about that..`;
        }
    }
    console.log( analyzeColor('red'.toLowerCase()) );

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log( analyzeColor(randomColor) );
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    let switchAnalyzeColor = (color) => {
        switch (color) {
            case 'red':
                return `${color.toUpperCase()}, like Strawberries`;
                break;
            case 'blue':
                return `${color.toUpperCase()}, like the vast and unexplored oceans`;
                break;
            case 'green':
                return `${color.toUpperCase()}, like the Microsoft valley wallpaper`;
                break;
            default:
                return `I dont know of this color "${color}", sorry about that..`;
                break;
        }
    }
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    let userPromptColor = prompt('Please type a color');
    alert(analyzeColor(userPromptColor));
    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    // let randomNumber = 4; //A number from 1-5
    // let totalPriceAmount = 100; //Total price of Walmart good being purchased
    // let calculateTotal = (luckyNumber, totalAmount) => {
    //     alert(`Total Amount is: ${totalAmount} \n Random Number Generated: ${luckyNumber}`)
    //     switch (luckyNumber) {
    //         case 1:
    //             return .90 * totalAmount;
    //         case 2:
    //             return .75 * totalAmount;
    //         case 3:
    //             return .65 * totalAmount;
    //         case 4:
    //             return .5 * totalAmount;
    //         case 5:
    //             alert('WE HAVE A WINNER');
    //             return 0 * totalAmount;
    //         default:
    //             alert('Sorry, better luck next time');
    //             return totalAmount;
    //     }
    // }
    // let message = calculateTotal(randomNumber, totalPriceAmount);
    // alert(`With discount applied, the total comes to $${message}`);
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6

    // var luckyNumber = Math.floor(Math.random() * 6);
    // let userEnterPrice = prompt('How much was the total charge?');
    // alert(`Total charge after discount applied is: $${calculateTotal(luckyNumber, userEnterPrice)}`);

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
        //Function to confirm if user would like to enter a number. If put 'okay' user will be prompted and value is
        //returned. If user does not want to enter number, alert will pop and will return null
    let wantToEnterNumber = () => {
        let confirmNumber = confirm('Would you like to enter a number?');
        let userEnterNumber;
        if (confirmNumber) {
            userEnterNumber = prompt('Please type a number');
            return userEnterNumber;
        } else {
            alert('Understood, have a good day');
            return userEnterNumber = null;
        }
    }
    //Functions takes value of wantToEnterNumber() as argument and if NaN or Null, will return Alert that it's not #
    //If number = function will run if/else for Odd/Even; Positive/Negative; number + 100.
    let factsOfNumber = (number) => {
        if ( number === null || isNaN(number) ) {
            return alert('That is not a number, please refresh and try again');
        }
        //If Statement to find out if number its Odd or Even
        if (number % 2 === 0) {
            alert(`Your number, ${number}, is:\n Even`);
        }
        else {
            alert(`Your number, ${number}, is:\n Odd`);
        }
        //Alert box to state how much user number is plus 100
        let numberPlus  = parseFloat(number) + 100;
        alert(`Your number, (${number}), plus 100 equals to:\n ${numberPlus}`)

        //if number is positive or negative
        if ( number < 0 ) {
            alert(`Your number is Negative: \n ${number}`);
        } else if (number > 0 ) {
            alert(`Your number is Positive: \n ${number}`);
        } else {
            alert(`Your number is neither positive or negative`);
        }
    }
    factsOfNumber(wantToEnterNumber());

    //Will redo above functions and seperate to individual functions for practicality


})();