document.addEventListener('DOMContentLoaded', function() {
    const firstElement = document.getElementById("first1");
    const secondElement = document.getElementById("second2");
    const thirdElement = document.getElementById("third3");
    const fourthElement = document.getElementById("fourth4");
    
    const disappear = document.querySelectorAll(".disappear");
    const backElement = document.getElementById("back1");
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
    const eventContent = document.querySelectorAll('.event-content');
    let linkEnabledFirst = false;
    let linkEnabledSecond = false;
    let linkEnabledThird = false;
    let linkEnabledFourth = false;
    const firstInnerCircle = document.querySelector('.innercircle')
    const secondInnerCircle = document.querySelector('.innercircle2')
    const thirdInnerCircle = document.querySelector('.innercircle3')
    const fourthInnerCircle = document.querySelector('.innercircle4')
    const header = document.querySelector('header');

    // MIND ELEMENT

    firstElement.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388be71-69de-11e8-bdc6-02bd505aa7b2";
            return;
        }
        if (mediaQuery.matches) {
            // firstElement.style.top = '50vh';
            // firstElement.style.left = "50vw";
            // firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            // secondElement.style.opacity = '0';
            // thirdElement.style.opacity = '0';
            // linkEnabledFirst = true;
            // // secondElement.style.pointerEvents = 'none';
            // mindContent.forEach(content => {
            //  content.style.display = "flex";
            //     });
            // clickedContainer.forEach(function(container) {
            // container.style.transform = 'scale(1)';
            // container.style.visibility = 'visible';
        // });

        } else {
            linkEnabledFirst = true;
            firstInnerCircle.style.height = '100%';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            firstElement.style.top = '50vh';
            firstElement.style.transform = 'translateY(-50%)scale(1.5)';

// Passive circles
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            fourthElement.style.opacity = '0';            
            thirdElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';

         
         
            // Zoom content Container Visible
            clickedContainer.forEach(function(container) {
                container.style.transform = 'scale(1)';
                container.style.visibility = 'visible';          
            });

            // Zoom Content disappear
            disappear.forEach(function(disappear) {
                disappear.style.opacity="0";
            
            });
            // Zoom Content klicked element Appear
            mindContent.forEach(content => {
             content.style.display = "flex";
                });
        }


    });

    // SWYM ELEMENT 

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
            secondInnerCircle.style.height = '100%';/*changes*/
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;


            secondElement.style.top = '50vh';
            secondElement.style.transform = 'translateY(-50%) scale(1.5)';/*changes*/

            // Passive circles
            firstElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            fourthElement.style.opacity = '0';

            firstElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';

            // Zoom Content Conainter Appear
            clickedContainer.forEach(function(container) {
                container.style.transform = 'scale(1)';
                container.style.visibility = 'visible';
            });

            // Zoom Content disappear
            disappear.forEach(function(disappear) {
                disappear.style.opacity="0";
            });
            // Zoom content Klicked element appear
            swymContent.forEach(content => {
            content.style.display = "flex";
            });
        }
    });

    // FITNESS ELEMENT

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
            thirdInnerCircle.style.height = '100%';
            header.style.backgroundColor = 'rgb(198, 199, 196)';

            thirdElement.style.top = '50vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1.5)';

            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';
            linkEnabledThird = true;
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            linkEnabledThird = true;

            fitnessContent.forEach(content => {
             content.style.display = "flex";
                });
            disappear.forEach(function(disappear) {
                disappear.style.opacity="0";
            
            });
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            fourthElement.style.opacity = '0';

        });
        }

    });

    // EVENT ELEMENT

    fourthElement.addEventListener('click', function() {
        if (linkEnabledFourth) {
            window.location.href = "https://www.eversports.de/scl/swym-bad?sport=b388be71-69de-11e8-bdc6-02bd505aa7b2";
            return;
        }
        if (mediaQuery.matches) {
            // fourthElement.style.top = '50vh';
            // fourthElement.style.left = "50vw";
            // fourthElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            // firstElement.style.opacity = '0';
            // secondElement.style.opacity = '0';
            // thirdElement.style.opacity = '0';

            // linkEnabledFirst = true;
            // //add for all elements:
            // secondElement.style.pointerEvents = 'none';

            // // mindContent.forEach(content => {
            // //  content.style.display = "flex";
            // //     });


            // clickedContainer.forEach(function(container) {
            // container.style.transform = 'scale(1)';
            // container.style.visibility = 'visible';

        // });

        } else {
            fourthInnerCircle.style.height = '100%';
            header.style.backgroundColor = 'Yellow';
            linkEnabledFourth = true;

            fourthElement.style.top = '50vh';
            fourthElement.style.transform = 'translateY(-50%)scale(1.5)';
            

            // passive circles
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            
            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';


            // Zoom clicked container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            
            // Zoom content Container passive content disappear
            disappear.forEach(function(disappear) {
                disappear.style.opacity="0";
            
            });
            // Zoom content container klicked element visible
            eventContent.forEach(content => {
             content.style.display = "flex";
                });

        });}
    });

// ZURÜCK BUTTON

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
        wordMind.style.textDecoration = "normal";
        wordSwym.style.fontWeight = 'normal';
        wordSwym.style.textDecoration = "normal";
        wordFitness.style.fontWeight = 'normal';
        wordFitness.style.textDecoration = "normal";



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
        linkEnabledFourth = false;

        } else {
            firstInnerCircle.style.height = '';
            secondInnerCircle.style.height = '';
            thirdInnerCircle.style.height = '';
            fourthInnerCircle.style.height = '';

  

            firstElement.style.top = '';
            firstElement.style.transform = '';
            firstElement.style.opacity = '';
            firstElement.style.pointerEvents = '';

            secondElement.style.top ="";
            secondElement.style.transform = '';
            secondElement.style.opacity = '';
            secondElement.style.pointerEvents = '';

            thirdElement.style.top = '';
            thirdElement.style.transform = '';
            thirdElement.style.opacity = '';
            thirdElement.style.pointerEvents = '';

            fourthElement.style.top = '';
            fourthElement.style.transform = '';
            fourthElement.style.opacity = '';
            fourthElement.style.pointerEvents = '';

            disappear.forEach(function(disappear) {
                disappear.style.opacity ="1";
            
            });


            /*wordbullet resets*/ 

        wordMind.style.textDecoration = "";
        wordMind.style.fontWeight = '';
        wordMind.style.fontSize = "";

        wordSwym.style.textDecoration = "";
        wordSwym.style.fontWeight = '';
        wordSwym.style.fontSize = "";

        wordFitness.style.textDecoration = "";
        wordFitness.style.fontSize = "";
        wordFitness.style.fontWeight = '';

        wordEvent.style.fontWeight = '';
        wordEvent.style.fontSize = "";        
        wordEvent.style.textDecoration = "";

        // wordMind.style.topPosition = '0.1rem'; try again later



// content container
mindContent.forEach(content => {
    content.style.display = "none";
});
swymContent.forEach(content => {
    content.style.display = "none";
});

fitnessContent.forEach(content => {
    content.style.display = "none";
});
eventContent.forEach(content => {
    content.style.display= "none";
});


// Zoom content container zoom away
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(0)';
            secondElement.style.pointerEvents = '';
        }); 

        /*link reset*/
            linkEnabledFirst = false;
            linkEnabledSecond = false;
            linkEnabledThird = false;
            linkEnabledFourth = false;
            header.style.backgroundColor = '';
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
['first1', 'second2', 'third3'].forEach(function(id) {
    document.getElementById(id).addEventListener('click', fadeOutFingerTap);
});




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
            wordMind.style.textDecoration = "underline";
            wordMind.style.textDecorationColor = "white";
            wordMind.style.fontSize = "1.1rem";
            
    });

    secondTrigger.addEventListener('click', function() {
        if (wordSwym.style.top !== bottomPosition) {
            swapPositions(wordSwym, currentMiddleWord());
        }
            resetFontWeights();
            wordSwym.style.fontWeight = 'bold';
            wordSwym.style.textDecoration = "underline";
            wordSwym.style.textDecorationColor = "white";
            wordSwym.style.fontSize = "1.1rem";
    });

    thirdTrigger.addEventListener('click', function() {
        if (wordFitness.style.top !== bottomPosition) {
            swapPositions(wordFitness, currentMiddleWord());
        }
            resetFontWeights();
            wordFitness.style.fontWeight = 'bold';
            wordFitness.style.textDecoration = "underline";
            wordFitness.style.textDecorationColor = "white";
            wordFitness.style.fontSize = "1.1rem";
    });

    fourthTrigger.addEventListener('click', function() {
        if (wordEvent.style.top !== bottomPosition) {
            swapPositions(wordEvent, currentMiddleWord());
        }
            resetFontWeights();
            wordEvent.style.fontWeight = 'bold';
            wordEvent.style.textDecoration = "underline";
            wordEvent.style.textDecorationColor = "white";
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






/*second container*/

document.addEventListener('DOMContentLoaded', function() {
    const firstElement = document.getElementById("first");
    const secondElement = document.getElementById("second");
    const thirdElement = document.getElementById("third");
    const backElement = document.getElementById("back");
    // const backgroundElement = document.getElementById("background");
    const clickedContainer = document.querySelectorAll(".top-leftklick1, .top-rightklick1, .middle-leftklick1, .middle-rightklick1"); 

    // const mrContent = document.querySelector(".mrContent");
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
            thirdElement.style.pointerEvents = 'none';

            mindContent.forEach(content => {
             content.style.display = "flex";
                });


            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';


        });
        } else {
            firstElement.style.top = '50vh';
            firstElement.style.transform = 'translateY(-50%)translateX(-50%)scale(1.5)';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            linkEnabledFirst = true;
            secondElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';

        // ANZEIGEFLÄCHE
        fitnessContent.forEach(content => {
             content.style.display = "flex";
                });

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';          
        });

        
        }
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
            secondElement.style.transform = 'translateY(-50%) translateX(-50%) scale(1.5)';
            firstElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            firstElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';
            linkEnabledSecond = true;

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';

            swymContent.forEach(content => {
    content.style.display = "flex";
});
        });
        }
         
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
            firstElement.style.pointerEvents = 'none';
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
            thirdElement.style.transform = 'translateY(-50%) translateX(-50%) scale(1.5)';
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


        /* What is the funktionality here? i thought to make the content disappear from the boxes that zoom in, but it works without the code*/

//         mindContent.forEach(content => {
//     content.style.display = "none";
// });
// swymContent.forEach(content => {
//     content.style.display = "none";
// });

// fitnessContent.forEach(content => {
//     content.style.display = "none";
// });
// eventContent.forEach(content => {
//     content.style.display = "none";
// })

            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(0)';

        });

        linkEnabledFirst = false;
        linkEnabledSecond = false;
        linkEnabledThird = false;
        linkEnabledFourth = false; /*does not Worke*/
        } else {

/*absolute elements*/
            firstElement.style.top = '25vh';
            firstElement.style.transform = 'translateY(-50%)translateX(-50%) scale(1)';
            firstElement.style.opacity = '1';

            secondElement.style.top = '50vh';
            secondElement.style.transform = 'translateY(-50%)translateX(-50%) scale(1)';
            secondElement.style.opacity = '1';

            thirdElement.style.top = '75vh';
            thirdElement.style.transform = 'translateY(-50%)translateX(-50%) scale(1)';
            thirdElement.style.opacity = '1';

            firstElement.style.pointerEvents = '';
            secondElement.style.pointerEvents = '';
            thirdElement.style.pointerEvents = '';

            linkEnabledFirst = false;
            linkEnabledSecond = false;
            linkEnabledThird = false;

            /*wordbullet resets*/ 
        wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
        wordFitness.style.textDecoration = "none";
        wordSwym.style.textDecoration = "none";
        wordMind.style.textDecoration = "none";

/*Content Resets*/
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



            function resetFontWeights() {
        wordMind.style.fontWeight = 'normal';
        wordSwym.style.fontWeight = 'normal';
        wordFitness.style.fontWeight = 'normal';
        secondElement.style.pointerEvents = '';
        

    }
        }

    });
});



/*wordbullet*/
document.addEventListener('DOMContentLoaded', function() {
    const firstTrigger1 = document.getElementById('first1');
    const secondTrigger1 = document.getElementById('second2');
    const thirdTrigger1 = document.getElementById('third3');
    const wordMind1 = document.getElementById('wordMind3');
    const wordSwym1 = document.getElementById('wordSwym3');
    const wordFitness1 = document.getElementById('wordFitness3');

    // Initialize the inline styles based on the CSS values
    wordMind1.style.top = '0em';
    wordSwym1.style.top = '1.2em';
    wordFitness1.style.top = '2.4em';

    let topPosition1 = '0em';
    let middlePosition1 = '1.2em';
    let bottomPosition1 = '2.4em';

    firstTrigger1.addEventListener('click', function() {
        if (wordMind1.style.top !== middlePosition) {
            swapPositions(wordMind1, currentMiddleWord());
            resetFontWeights();
            wordMind1.style.fontWeight = 'bold';
            wordMind1.style.textDecoration = "underline";
            wordMind1.style.textDecorationColor = "white";
        }
    });

    secondTrigger1.addEventListener('click', function() {
        if (wordSwym1.style.top !== middlePosition) {
            swapPositions(wordSwym1, currentMiddleWord());
            resetFontWeights();
            wordSwym1.style.fontWeight = 'bold';
            wordSwym1.style.textDecoration = "underline";
            wordSwym1.style.textDecorationColor = "white";
        }
    });

    thirdTrigger1.addEventListener('click', function() {
        if (wordFitness1.style.top !== middlePosition) {
            swapPositions(wordFitness1, currentMiddleWord());
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
const toggler1 = document.querySelector('.menu__toggler3');
const menu1    = document.querySelector('.menu3');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler1.addEventListener('click', () => {
  toggler1.classList.toggle('active');
  menu1.classList.toggle('active');
})


// IMAGE SLIDER
// script.js
document.addEventListener("DOMContentLoaded", function() {
    setupSlider('#circle3 .simon1', 'prevBtn', 'nextBtn', ['url(Images/Yoga-colored.jpg)', 'url(Images/yoga1.jpg)']);
    setupSlider('#circle3 .simon2', 'prevBtn2', 'nextBtn2', ['url(Images/jumpwater.jpg)', 'url(Images/schwimmen-colored.jpg)', 'url(Images/schwimmentrainer-colored.jpg)','url(Images/Aquafitness-colored.jpg)','url(Images/sschwimmenteach-colored.jpg)','url(Images/schwimmenatmung-colored.jpg)']); // Replace with actual images for simon2
    setupSlider('#circle3 .simon3', 'prevBtn3', 'nextBtn3', ['url(Images/fitness.jpg)', 'url(Images/Fitness-colored.jpg)']); // Replace with actual images for simon3
});

function setupSlider(sliderSelector, prevBtnId, nextBtnId, images) {
    let slider = document.querySelector(sliderSelector);
    let currentIndex = 0;

    function showSlide(index) {
        slider.style.backgroundImage = images[index];
    }

    document.getElementById(prevBtnId).addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showSlide(currentIndex);
    });

    document.getElementById(nextBtnId).addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Initialize with the first image
}
