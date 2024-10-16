const searchButton = document.getElementById('searchButton');
const container = document.getElementById('container');

let searchInput = document.getElementById('search');
let noCapsInput = ''
let quickCheck = false

searchButton.addEventListener('click', () => {
    commitSearch();
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchInput.focus();
        commitSearch();
    }
});

function commitSearch(){
    noCapsOnInput();
    searchData(noCapsInput);
}
function noCapsOnInput(){
    noCapsInput = searchInput.value.toLowerCase();
}
function searchData(data) {
    if (!searchInput.value) {
        if(quickCheck){
            deleteData();
        }
        displayData(data, true)
        return;
    } if(!(data in dictionaryData)){
        displayData(data, true)
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
    definitionDeleter.remove();
}
function displayData(data, error) {
    if(error){
        const errorText = document.createElement('p');
        container.appendChild(errorText);
        errorText.classList.add('defs1');

        if(!searchInput.value){
            errorText.innerText = 'Please enter a word';
            quickCheck = true;
            return;
        } else{
            errorText.innerText = `'${searchInput.value}' was not found in the dictionary`;
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
    },
    element: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'Represents the building blocks of a web page.',
            two: 'Represents the value of each index in arrays.'
        }
    },
    array: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A variable that holds multiple values. Each index is called an element.'
        }
    },
    string: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A piece of text encased inside of \'singlequotes\', "doublequotes", or `backticks`.'
        }
    },
    index: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'The ith element or character.'
        }
    },
    loop: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A process that repeats indefinitely until its condition is reached.'
        }
    },
    tag: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'Tags in HTML are elements enclosed in <angle brackets> used to structure content.',
            two: 'Typically tags have an <opening> and </closing> tag, but some exceptions occur.'
        }
    },
    attribute: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'Provides additional information to modify an HTML element like IDs or Classes.',
            two: 'Can be placed in the opening tag.'
        }
    },
    selector: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'In CSS, selectors signify what elements the styles will apply towards.'
        }
    },
    property: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'Used in CSS to define what style to apply on an element.'
        }
    },
    function: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'In JavaScript, a function is a reusable block of code that can be called to run.',
            two: 'Can be defined using the function keyword and can use parameters to help with certain behaviors.'
        }
    },
    variable: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A variable in JavaScript is a container to hold data values.',
            two: 'Can be created using var, let, or const and can hold data types like strings, numbers, or objects.'
        }
    },
    event: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'An event is an action that occurs in the browser, such as a mouse click, which can be detected through JavaScript.'
        }
    },
    class: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A class is an attribute that can be applied to an element to tell CSS to apply specific styles to it.'
        }
    },
    anchor: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'Uses <a> to insert a hyperlink to an internal or external page.',
            two: 'It also uses the href attribute to specify the path/url.'
        }
    },
    input: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'An interactive field that lets the user enter data.'
        }
    },
    image: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'An image is a picture displayed on the screen.',
            two: 'Uses the <img> tag to embed itself to the HTML page and uses src attribute to specify the path/url.'
        }
    },
    grid: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A structure made up of columns and rows.'
        }
    },
    alert: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'The alert() function sends a popup message to the user with an OK button.'
        }
    },
    transition: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'A way of telling the computer how to make something appear or change instead of it being instantaneous.'
        }
    },
    debug: {
        partOfSpeech: 'noun',
        definitions: {
            one: 'The process of finding and fixing errors in code, typically using the console to find out information.'
        }
    }    
};
searchInput.focus();
