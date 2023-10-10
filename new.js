
document.addEventListener('DOMContentLoaded', function() {
    const firstElement = document.getElementById("first");
    const secondElement = document.getElementById("second");
    const thirdElement = document.getElementById("third");
    const backElement = document.getElementById("back");
    const backgroundElement = document.getElementById("background");
    const clickedContainer = document.querySelector('.klicked-container'); // Assuming the class name is 'clicked-container'

    const mediaQuery = window.matchMedia("(min-width: 786px)");

    let linkEnabledFirst = false;
    let linkEnabledSecond = false;
    let linkEnabledThird = false;

    function handleCircleClick() {
        clickedContainer.style.opacity = '1'; // Set opacity of clicked-container to 1

        const extraCircles = document.querySelectorAll('.smallcircle');
        extraCircles.forEach(extraCircle => {
            extraCircle.style.transition = 'opacity 0.5s';
            extraCircle.style.opacity = '0';
        });

        const classesToChangeOpacity = ['.top-leftklick', '.top-rightklick', '.middle-leftklick', '.middle-rightklick', '.back'];
        classesToChangeOpacity.forEach(className => {
            const elements = document.querySelectorAll(className);
            elements.forEach(element => {
                element.style.transition = 'opacity 0.5s';
                element.style.opacity = '1';
            });
        });
    }

    firstElement.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388be71-69de-11e8-bdc6-02bd505aa7b2";
            return;
        }
        if (mediaQuery.matches) {
            firstElement.style.top = '50vh';
            firstElement.style.left = "50vw";
            firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            secondElement.style.display = 'none';
            thirdElement.style.display = 'none';
            linkEnabledFirst = true;
        } else {
            firstElement.style.top = '50vh';
            firstElement.style.transform = 'translateY(-50%)scale(1.5)';
            secondElement.style.display = 'none';
            thirdElement.style.display = 'none';
            linkEnabledFirst = true;
        }
        backgroundElement.style.setProperty('--scale', '1.5');
        handleCircleClick();
    });

    secondElement.addEventListener('click', function() {
        if (linkEnabledSecond) {
            window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388b312-69de-11e8-bdc6-02bd505aa7b2";
            return;
        }
        if (mediaQuery.matches) {
            secondElement.style.top = '50vh';
            secondElement.style.left = "50vw";
            secondElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            firstElement.style.display = 'none';
            thirdElement.style.display = 'none';
        } else {
            secondElement.style.transform = 'translateY(-50%) scale(1.5)';
            firstElement.style.display = 'none';
            thirdElement.style.display = 'none';
            linkEnabledSecond = true;

        }
        backgroundElement.style.setProperty('--scale', '1.5');
        handleCircleClick();
    });

    thirdElement.addEventListener('click', function() {
        if (linkEnabledThird) {
            window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b38743da-69de-11e8-bdc6-02bd505aa7b2";
            return;
        }
        if (mediaQuery.matches) {
            thirdElement.style.top = '50vh';
            thirdElement.style.right = "50vw";
            thirdElement.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            firstElement.style.display = 'none';
            secondElement.style.display = 'none';
        } else {
            thirdElement.style.top = '50vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1.5)';
            firstElement.style.display = 'none';
            secondElement.style.display = 'none';
            linkEnabledThird = true;

        }
        backgroundElement.style.setProperty('--scale', '1.5');
        handleCircleClick();
    });

    backElement.addEventListener('click', function() {
        
        if (mediaQuery.matches) {
            firstElement.style.top = '50vh';
            firstElement.style.left = '25vw';
            firstElement.style.transform = 'translate(-50%, -50%) scale(1)';
            secondElement.style.top = '50vh';
            secondElement.style.left = '50vw';
            secondElement.style.transform = 'translate(-50%, -50%) scale(1)';
            thirdElement.style.top = '50vh';
            thirdElement.style.right = '25vw';
            thirdElement.style.transform = 'translateX(50%) translateY(-50%) scale(1)';
            firstElement.style.display = 'block';
            secondElement.style.display = 'block';
            thirdElement.style.display = 'block';
            linkEnabledFirst = false;
            linkEnabledSecond = false;
            linkEnabledThird = false;
            function resetFontWeights() {
        wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
    }
        } else {
            firstElement.style.top = '25vh';
            firstElement.style.transform = 'translateY(-50%) scale(1)';
            firstElement.style.display = 'block';
            secondElement.style.transform = 'translateY(-50%) scale(1)';
            secondElement.style.display = 'block';
            thirdElement.style.top = '75vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1)';
            thirdElement.style.display = 'block';
            linkEnabledFirst = false;
            linkEnabledSecond = false;
            linkEnabledThird = false;
        }
        backgroundElement.style.setProperty('--scale', '1');
        linkEnabledFirst = false;
        clickedContainer.style.opacity = '0'; // Reset opacity of clicked-container to 0
    });
});




/*wordbullet*/
document.addEventListener('DOMContentLoaded', function() {
    const firstTrigger = document.getElementById('first');
    const secondTrigger = document.getElementById('second');
    const thirdTrigger = document.getElementById('third');
    const wordMind = document.getElementById('wordMind');
    const wordSwym = document.getElementById('wordSwym');
    const wordFitness = document.getElementById('wordFitness');

    // Initialize the inline styles based on the CSS values
    wordMind.style.top = '0em';
    wordSwym.style.top = '1.2em';
    wordFitness.style.top = '2.4em';

    let topPosition = '0em';
    let middlePosition = '1.2em';
    let bottomPosition = '2.4em';

    firstTrigger.addEventListener('click', function() {
        if (wordMind.style.top !== middlePosition) {
            swapPositions(wordMind, currentMiddleWord());
            resetFontWeights();
            wordMind.style.fontWeight = 'bold';
        }
    });

    secondTrigger.addEventListener('click', function() {
        if (wordSwym.style.top !== middlePosition) {
            swapPositions(wordSwym, currentMiddleWord());
            resetFontWeights();
            wordSwym.style.fontWeight = 'bold';
        }
    });

    thirdTrigger.addEventListener('click', function() {
        if (wordFitness.style.top !== middlePosition) {
            swapPositions(wordFitness, currentMiddleWord());
            resetFontWeights();
            wordFitness.style.fontWeight = 'bold';
        }
    });

    function currentMiddleWord() {
        if (wordMind.style.top === middlePosition) return wordMind;
        if (wordSwym.style.top === middlePosition) return wordSwym;
        if (wordFitness.style.top === middlePosition) return wordFitness;
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
    }
});
/*wordbullet end*/
// document.addEventListener('DOMContentLoaded', function() {
//     const firstElement = document.getElementById("first");
//     const secondElement = document.getElementById("second");
//     const thirdElement = document.getElementById("third");
//     const backElement = document.getElementById("back");
//     const backgroundElement = document.getElementById("background");
//     const clickedContainer = document.querySelector('.klicked-container'); // Assuming the class name is 'clicked-container'

//     const mediaQuery = window.matchMedia("(min-width: 786px)");

//     let linkEnabledFirst = false;
//     let linkEnabledSecond = false;
//     let linkEnabledThird = false;

//     function handleCircleClick() {
//         clickedContainer.style.opacity = '1'; // Set opacity of clicked-container to 1

//         const extraCircles = document.querySelectorAll('.smallcircle');
//         extraCircles.forEach(extraCircle => {
//             extraCircle.style.transition = 'opacity 0.5s';
//             extraCircle.style.opacity = '0';
//         });

//         const classesToChangeOpacity = ['.top-leftklick', '.top-rightklick', '.middle-leftklick', '.middle-rightklick', '.back'];
//         classesToChangeOpacity.forEach(className => {
//             const elements = document.querySelectorAll(className);
//             elements.forEach(element => {
//                 element.style.transition = 'opacity 0.5s';
//                 element.style.opacity = '1';
//             });
//         });
//     }

//     firstElement.addEventListener('click', function() {
//         if (linkEnabledFirst) {
//             window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388be71-69de-11e8-bdc6-02bd505aa7b2";
//             return;
//         }
//         if (mediaQuery.matches) {
//             firstElement.style.top = '50vh';
//             firstElement.style.left = "50vw";
//             firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
//             secondElement.style.display = 'none';
//             thirdElement.style.display = 'none';
//         } else {
//             firstElement.style.top = '50vh';
//             firstElement.style.transform = 'translateY(-50%)scale(1.5)';
//             secondElement.style.display = 'none';
//             thirdElement.style.display = 'none';
//             linkEnabledFirst = true;
//         }
//         backgroundElement.style.setProperty('--scale', '1.5');
//         handleCircleClick();
//     });

//     secondElement.addEventListener('click', function() {
//         if (linkEnabledSecond) {
//             window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388b312-69de-11e8-bdc6-02bd505aa7b2";
//             return;
//         }
//         if (mediaQuery.matches) {
//             secondElement.style.top = '50vh';
//             secondElement.style.left = "50vw";
//             secondElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
//             firstElement.style.display = 'none';
//             thirdElement.style.display = 'none';
//         } else {
//             secondElement.style.transform = 'translateY(-50%) scale(1.5)';
//             firstElement.style.display = 'none';
//             thirdElement.style.display = 'none';
//             linkEnabledSecond = true;

//         }
//         backgroundElement.style.setProperty('--scale', '1.5');
//         handleCircleClick();
//     });

//     thirdElement.addEventListener('click', function() {
//         if (linkEnabledThird) {
//             window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b38743da-69de-11e8-bdc6-02bd505aa7b2";
//             return;
//         }
//         if (mediaQuery.matches) {
//             thirdElement.style.top = '50vh';
//             thirdElement.style.right = "50vw";
//             thirdElement.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
//             firstElement.style.display = 'none';
//             secondElement.style.display = 'none';
//         } else {
//             thirdElement.style.top = '50vh';
//             thirdElement.style.transform = 'translateY(-50%) scale(1.5)';
//             firstElement.style.display = 'none';
//             secondElement.style.display = 'none';
//             linkEnabledThird = true;

//         }
//         backgroundElement.style.setProperty('--scale', '1.5');
//         handleCircleClick();
//     });

//     backElement.addEventListener('click', function() {
//         if (mediaQuery.matches) {
//             firstElement.style.top = '50vh';
//             firstElement.style.left = '25vw';
//             firstElement.style.transform = 'translate(-50%, -50%) scale(1)';
//             secondElement.style.top = '50vh';
//             secondElement.style.left = '50vw';
//             secondElement.style.transform = 'translate(-50%, -50%) scale(1)';
//             thirdElement.style.top = '50vh';
//             thirdElement.style.right = '25vw';
//             thirdElement.style.transform = 'translateX(50%) translateY(-50%) scale(1)';
//             firstElement.style.display = 'block';
//             secondElement.style.display = 'block';
//             thirdElement.style.display = 'block';
//             linkEnabledFirst = false;
//             linkEnabledSecond = false;
//             linkEnabledThird = false;
//         } else {
//             firstElement.style.top = '25vh';
//             firstElement.style.transform = 'translateY(-50%) scale(1)';
//             firstElement.style.display = 'block';
//             secondElement.style.transform = 'translateY(-50%) scale(1)';
//             secondElement.style.display = 'block';
//             thirdElement.style.top = '75vh';
//             thirdElement.style.transform = 'translateY(-50%) scale(1)';
//             thirdElement.style.display = 'block';
//             linkEnabledFirst = false;
//             linkEnabledSecond = false;
//             linkEnabledThird = false;
//         }
//         backgroundElement.style.setProperty('--scale', '1');
//         linkEnabledFirst = false;
//         clickedContainer.style.opacity = '0'; // Reset opacity of clicked-container to 0
//     });
// });

