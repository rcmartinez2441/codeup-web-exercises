'use strict';

let getKindOfDog = () => {
    return prompt('What kind of dog is it?');
}


let getContactInfo = () => {
    return prompt('How do I contact you when I find the dog?');
}

let getDogName = () => {
    return prompt("What is dog's name");
}


let playTheGreatEscape = () => {
    alert('OH NO YOUR DOG IS LOST');
    // get all the info
    let dogKind = getKindOfDog();
    let dogName = getDogName();
    let contactInfo = getContactInfo();

    alert('Time to search for this doggo')
    searchingForDog(dogKind, dogName, contactInfo);
}
let searchingForDog = (dogKind, dogName, contactInfo) => {
    alert('I see a dog!');

    let kindOfDogSeen = getKindOfDog();
    let isLostDog = (dogKind === kindOfDogSeen) && confirm('Does the dog respond to the name: ' + dogName);

    if (isLostDog) {
        alert('I think I see the goofball');
        alert (`He bit me and now Im suing you, thanks for the contact: ${contactInfo} idiot`);
    } else {
        alert('That is not the dog')
        searchingForDog(dogKind, dogName, contactInfo);
    }
}

playTheGreatEscape();