const searchButton = document.getElementById('searchButton');
const container = document.getElementById('container');

let searchInput = document.getElementById('search');
let quickCheck = false

searchButton.addEventListener('click', () => {
    console.log(searchInput.value);
    searchData(searchInput.value);
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchInput.focus();
        searchData(searchInput.value);
    }
});

function searchData(data) {
    if (!searchInput) {
        if(quickCheck){
            deleteData();
        }
        displayData(searchInput.value, true)
        return;
    } if(!(data in dictionaryData)){
        displayData(searchInput.value, true)
    }
    if(quickCheck) {
        deleteData();
    }
    displayData(data);
}
function deleteData() {
    if(!searchInput) {
        return
    }
    const definitionDeleter = event.target.parentNode.parentNode.parentNode.children[2].children[0];
    console.log(definitionDeleter);
    definitionDeleter.remove();
}
function displayData(data, error) {
    if(error){
        if(!searchInput.value){
            console.log(true);
            const errorText = document.createElement('p');
            container.appendChild(errorText);
            errorText.innerText = 'Please enter a word';
            errorText.classList.add('defs1');
            quickCheck = true;
            return;
        } else{
            const errorText = document.createElement('p');
            errorText.innerText = `'${searchInput.value}' was not found in the dictionary`;
            container.appendChild(errorText);
            errorText.classList.add('defs1');
            quickCheck = true;
            return;
        }
    }
    const definition = document.createElement('div');
    const partOfSpeech = document.createElement('p');
    const definitionOne = document.createElement('p');
    
    partOfSpeech.innerText = dictionaryData[data].partOfSpeech;
    definitionOne.innerText = '1). ' + dictionaryData[data].definitions.one;

    container.appendChild(definition);
    definition.appendChild(partOfSpeech);
    definition.appendChild(definitionOne);

    definition.classList.add('definitions');
    partOfSpeech.classList.add('defs');
    definitionOne.classList.add('defs');

    
    if ('two' in dictionaryData[data].definitions) {
        const definitionTwo = document.createElement('p');
        definitionTwo.innerText = '2). ' + dictionaryData[data].definitions.two;
        definition.appendChild(definitionTwo);
        definitionTwo.classList.add('defs');
    }
    quickCheck = true
}

// Data for the dictionary
const dictionaryData = {
    yes: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'Used to give an affirmative response.',
            two: 'Used as a response to someone addressing one or otherwise trying to attract one\'s attention.'
        }
    },
    panacea: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'An answer or solution for all problems or difficulties.'
        }
    },
    concatenation: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A series of interconnected or interdependent things or events.'
        }
    },
    saw: {
        partOfSpeech: 'verb',
        definitions: {
            one: 'Cut (something) using a saw.',
            two: 'Make rapid to-and-fro motions in cutting something or in playing a stringed instrument.'
        }
    },
    found: {
        partOfSpeech: 'adjective',
        definitions: {
            one: 'Having been discovered by chance or unexpectedly.',
            two: '(of a ship) Equipped; Supplied.'
        }
    },
    crane: {
        partOfSpeech: 'verb',
        definitions: {
            one: 'Stretch out one\'s body or neck in order to see something.',
            two: 'Move (a heavy object) with a crane.'
        }
    },
    minute: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A period of time equal to sixty seconds or a sixtieth of an hour.',
            two: 'A sixtieth of a degree of angular measurement (symbol: ʹ).'
        }
    },
    grotesque: {
        partOfSpeech: 'adjective',
        definitions: {
            one: 'Comically or repulsively ugly or distorted.'
        }
    },
    label: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it.'
        }
    },
    debacle: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A sudden and ignominious failure; a fiasco.'
        }
    }
};
// searchData('yes');
searchInput.focus();
