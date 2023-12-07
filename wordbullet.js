/*wordbullet*/
document.addEventListener('DOMContentLoaded', function() {
    const firstTrigger = document.getElementById('first1');
    const secondTrigger = document.getElementById('second2');
    const thirdTrigger = document.getElementById('third3');
    const fourthTrigger = document.getElementById('fourth4');
    const wordMind = document.getElementById('wordMind');
    const wordSwym = document.getElementById('wordSwym');
    const wordFitness = document.getElementById('wordFitness');
    const wordEvent = document.getElementById('wordEvent');

    // Initialize the inline styles based on the CSS values
    wordMind.style.top = '0%';
    wordSwym.style.top = '24%';
    wordFitness.style.top = '46%';
    wordEvent.style.top = '69%';

    // wordMind.style.transform = 'translateX(-15%)';
    // wordSwym.style.transform = 'translateX(-25%)';
    // wordFitness.transform = 'translateX(-55%)';
    // wordEvent.style.transform = 'translateX(-15%)';

    let topPosition = '0%';
    let middlePosition1 = '25%';
    let middlePosition2 = '50%'; /*use this value to take the word back to its original spot even after klicking the back button*/
    let bottomPosition = '69%';



    firstTrigger.addEventListener('click', function() {
        if (wordMind.style.top !== bottomPosition) {
            swapPositions(wordMind, currentMiddleWord());
        }
            resetFontWeights();
            wordMind.style.fontWeight = 'bold';

            wordMind.style.fontSize = "1.1rem";
            
    });

    secondTrigger.addEventListener('click', function() {
        if (wordSwym.style.top !== bottomPosition) {
            swapPositions(wordSwym, currentMiddleWord());
        }
            resetFontWeights();
            wordSwym.style.fontWeight = 'bold';

            wordSwym.style.fontSize = "1.1rem";
    });

    thirdTrigger.addEventListener('click', function() {
        if (wordFitness.style.top !== bottomPosition) {
            swapPositions(wordFitness, currentMiddleWord());
        }
            resetFontWeights();
            wordFitness.style.fontWeight = 'bold';

            wordFitness.style.fontSize = "1.1rem";
    });

    fourthTrigger.addEventListener('click', function() {
        if (wordEvent.style.top !== bottomPosition) {
            swapPositions(wordEvent, currentMiddleWord());
        }
            resetFontWeights();
            wordEvent.style.fontWeight = 'bold';

            wordEvent.style.fontSize = "1.1rem";

    });

    function currentMiddleWord() {
        if (wordMind.style.top === bottomPosition) return wordMind;
        if (wordSwym.style.top === bottomPosition) return wordSwym;
        if (wordFitness.style.top === bottomPosition) return wordFitness;
        if(wordEvent.style.top === bottomPosition) return wordEvent;
    }

    function swapPositions(word1, word2) {
        let temp = word1.style.top;
        word1.style.top = word2.style.top;
        word2.style.top = temp;
        
    }

    function resetFontWeights() {
        wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
        wordEvent.style.fontweight = "normal";
    }
});
/*wordbullet end*/