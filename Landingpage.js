document.addEventListener('DOMContentLoaded', function() {
    const firstElement = document.getElementById("first");
    const secondElement = document.getElementById("second");
    const thirdElement = document.getElementById("third");
    const backElement = document.getElementById("back");
    const backgroundElement = document.getElementById("background");
    const clickedContainer = document.querySelectorAll(".top-leftklick, .top-rightklick, .middle-leftklick, .middle-rightklick"); 

    const mrContent = document.querySelector(".mrContent");
    const mediaQuery = window.matchMedia("(min-width: 786px)");


    /*mind/swym/fitness-content toggle*/
    // let mindcontent = document.getElementById("mind-content-container");
    // let swymcontent = document.getElementById("swym-content-container");
    // let fitnesscontent = document.getElementById("fitness-content-container");
    // let contentContainer = document.getElementById("content-container");

    const swymContent = document.querySelectorAll('.swym-content');
    const mindContent = document.querySelectorAll('.mind-content');
    const fitnessContent = document.querySelectorAll('.fitness-content');

    let linkEnabledFirst = false;
    let linkEnabledSecond = false;
    let linkEnabledThird = false;


    firstElement.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388be71-69de-11e8-bdc6-02bd505aa7b2";
            return;
        }
        if (mediaQuery.matches) {
            firstElement.style.top = '50vh';
            firstElement.style.left = "50vw";
            firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            linkEnabledFirst = true;
            secondElement.style.pointerEvents = 'none';

            mindContent.forEach(content => {
             content.style.display = "flex";
                });


            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';


        });
        } else {
            firstElement.style.top = '50vh';
            firstElement.style.transform = 'translateY(-50%)scale(1.5)';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            linkEnabledFirst = true;
            secondElement.style.pointerEvents = 'none';

            mindContent.forEach(content => {
             content.style.display = "flex";
                });

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            // document.querySelector('.mr-content').innerHTML = 'Heading for Item 3'
            

            // mindcontent.style.transform ="scale(1)";

            
            
        });

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
            firstElement.style.opacity = '0';
            thirdElement.style.opacity = '0';

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            linkEnabledSecond = true;

            swymContent.forEach(content => {
             content.style.display = "flex";
                });
        });
        } else {
            secondElement.style.transform = 'translateY(-50%) scale(1.5)';
            firstElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            linkEnabledSecond = true;

            // swymcontent.style.display ="flex";
            swymContent.forEach(content => {
    content.style.display = "flex";
});

        });
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
           
            thirdElement.style.left = "50vw";
            thirdElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            // firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fitnessContent.forEach(content => {
             content.style.display = "flex";
                });


            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            linkEnabledThird = true;


        });
        } else {
            thirdElement.style.top = '50vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1.5)';
            secondElement.style.pointerEvents = 'none';
            linkEnabledThird = true;
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            linkEnabledThird = true;

            fitnessContent.forEach(content => {
             content.style.display = "flex";
                });

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';

        });
        }
        backgroundElement.style.setProperty('--scale', '1.5');
        handleCircleClick();
    });

    backElement.addEventListener('click', function() {
        
        if (mediaQuery.matches) {
           
            firstElement.style.left = '25vw';
            firstElement.style.transform = 'translate(-50%, -50%) scale(1)';

            secondElement.style.left = '50vw';
            secondElement.style.transform = 'translate(-50%, -50%) scale(1)';

            thirdElement.style.left = '75vw';
            thirdElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';

            firstElement.style.opacity = '1';

            secondElement.style.opacity = '1';
            secondElement.style.pointerEvents = '';
            thirdElement.style.opacity = '1';

                                /*wordbullet resets*/
                                wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
        wordFitness.style.textDecoration = "none";
        wordSwym.style.textDecoration = "none";
        wordMind.style.textDecoration = "none";

        mindContent.forEach(content => {
    content.style.display = "none";
});
swymContent.forEach(content => {
    content.style.display = "none";
});

fitnessContent.forEach(content => {
    content.style.display = "none";
});

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(0)';




        });

        linkEnabledFirst = false;
            linkEnabledSecond = false;
            linkEnabledThird = false;
        } else {


            firstElement.style.top = '25vh';
            firstElement.style.transform = 'translateY(-50%) scale(1)';

            firstElement.style.opacity = '1';
            secondElement.style.transform = 'translateY(-50%) scale(1)';

            secondElement.style.opacity = '1';
            thirdElement.style.top = '75vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1)';

            thirdElement.style.opacity = '1';
            /*wordbullet resets*/ 
            wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
        wordFitness.style.textDecoration = "none";
        wordSwym.style.textDecoration = "none";
        wordMind.style.textDecoration = "none";

        mindContent.forEach(content => {
    content.style.display = "none";
});
swymContent.forEach(content => {
    content.style.display = "none";
});

fitnessContent.forEach(content => {
    content.style.display = "none";
});



            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(0)';
            secondElement.style.pointerEvents = '';


        //     mindcontent.style.display ="none";
        // swymcontent.style.display ="none";
        // fitnesscontent.style.display="none";
        

        }); 


        /*link reset*/
            linkEnabledFirst = false;
            linkEnabledSecond = false;
            linkEnabledThird = false;


            function resetFontWeights() {
        wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
        secondElement.style.pointerEvents = '';
        

    }
        }

    });
});

/*fingerTap*/
// Function to fade out the fingerTap element
function fadeOutFingerTap() {
    var fingerTapElement = document.getElementById('fingerTap');
    
    // Begin the opacity transition
    fingerTapElement.style.opacity = '0';
}

// Fade out fingerTap after 3 seconds automatically
setTimeout(fadeOutFingerTap, 3000);

// Add event listeners to the elements 'first', 'second', and 'third'
['first', 'second', 'third'].forEach(function(id) {
    document.getElementById(id).addEventListener('click', fadeOutFingerTap);
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
            wordMind.style.textDecoration = "underline";
            wordMind.style.textDecorationColor = "white";
        }
    });

    secondTrigger.addEventListener('click', function() {
        if (wordSwym.style.top !== middlePosition) {
            swapPositions(wordSwym, currentMiddleWord());
            resetFontWeights();
            wordSwym.style.fontWeight = 'bold';
            wordSwym.style.textDecoration = "underline";
            wordSwym.style.textDecorationColor = "white";
        }
    });

    thirdTrigger.addEventListener('click', function() {
        if (wordFitness.style.top !== middlePosition) {
            swapPositions(wordFitness, currentMiddleWord());
            resetFontWeights();
            wordFitness.style.fontWeight = 'bold';
            wordFitness.style.textDecoration = "underline";
            wordFitness.style.textDecorationColor = "white";
            
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


/*navbar start*/
const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})