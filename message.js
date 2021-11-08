//



function createMessage(){
    const message = {
        time: ['Today', 'This week', 'Tomorrow', 'This year', 'This month'],
        theAction: ['have a great time', 'do terrific things', 'achieve your goals', 'accomplish everything you set yourself to', 'come across new opportunities'],
        goodBye: ['Love you', 'Much love', '~Blessings~', 'Take care', 'See you around']
    }
    let finalMessage = [];
    let randomSelect = arrayLength => {
        return Math.floor(Math.random() * arrayLength);
    }

    for(let element in message){
        let randIndex = randomSelect(message[element].length);
        switch(element){
            case 'time':
                finalMessage.push(message[element][randIndex]);
                break;
            case 'theAction':
                finalMessage.push(`, you are going to ${message[element][randIndex]}`);
                break;
            case 'goodBye':
                finalMessage.push(` ${message[element][randIndex]}`);
                break;
        }
    }
    return finalMessage;


}

console.log(createMessage());