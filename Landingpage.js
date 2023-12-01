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
            firstElement.style.top = '50vh';
            firstElement.style.left = "50vw";
            firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;

            // PASSIVE CIRCLES
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            fourthElement.style.opacity = '0';
            linkEnabledFirst = true;
            secondElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';  
            fourthElement.style.pointerEvents = 'none';

            // Zoom Container content Visible
            mindContent.forEach(content => {
             content.style.display = "flex";
                });
                // Zoom container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
        });

        } else {
            firstInnerCircle.style.height = '100%';
            firstElement.style.top = '50vh';
            firstElement.style.transform = 'translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;



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
            secondElement.style.right = "50vw";
            secondElement.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;

            // PASSIVE CIRCLES
            firstElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            fourthElement.style.opacity = '0';

            firstElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';

            // Zoom Content Container Visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            // Swym content visible
            swymContent.forEach(content => {
             content.style.display = "flex";
                });
        });

        } else {
            secondInnerCircle.style.height = '100%';
            secondElement.style.top = '50vh';
            secondElement.style.transform = 'translateY(-50%) scale(1.5)';
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;


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
            thirdElement.style.top = '50vh';
            thirdElement.style.left = "50vw";
            thirdElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(198, 199, 196)';
            linkEnabledThird = true;

            // PASSIVE CIRCLES
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            fourthElement.style.opacity = '0';
            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';

            // Zoom Container content visible
            fitnessContent.forEach(content => {
             content.style.display = "flex";
                });

            // Zoom Container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            linkEnabledThird = true;


        });
        } else {
            thirdInnerCircle.style.height = '100%';
            thirdElement.style.top = '50vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1.5)';
            header.style.backgroundColor = 'rgb(198, 199, 196)';
            linkEnabledThird = true;

            //PASSIVE CIRCLES
            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';

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
            // Event Circle
            fourthElement.style.top = '50vh';
            fourthElement.style.right = "50vw";
            fourthElement.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            linkEnabledFirst = true;
            header.style.backgroundColor = '#cc4406';


            // PASSIVE CIRCLES
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';

            // Zoom  container content visible
            mindContent.forEach(content => {
             content.style.display = "flex";
                });

            // Zoom container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';

        });

        } else {
            fourthInnerCircle.style.height = '100%';
            fourthElement.style.top = '50vh';
            fourthElement.style.transform = 'translateY(-50%)scale(1.5)';
            header.style.backgroundColor = '#cc4406';
            linkEnabledFourth = true;           

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
            // Mind Circle
            firstElement.style.top = '';
            firstElement.style.left = '';
            firstElement.style.transform = '';
            firstElement.style.opacity = '';
            firstElement.style.pointerEvents = '';


            // Swym Circle
            secondElement.style.top = '';
            secondElement.style.right = '';
            secondElement.style.transform = '';
            secondElement.style.opacity = '';
            secondElement.style.pointerEvents = '';

            // Fitness Circle
            thirdElement.style.top = '';
            thirdElement.style.left = '';
            thirdElement.style.transform = '';
            thirdElement.style.opacity = '';
            thirdElement.style.pointerEvents = '';

            // Event Circle
            fourthElement.style.top = '';
            fourthElement.style.right = '';
            fourthElement.style.transform = '';
            fourthElement.style.opacity = '';
            fourthElement.style.pointerEvents = '';



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


        }
            /*FUNKTIONS THAT WORK FOR ALL THE PAGE-SIZES*/

                    /*======WORDBULLET RESETS=======*/ 

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

                    /*link reset*/
                    linkEnabledFirst = false;
                    linkEnabledSecond = false;
                    linkEnabledThird = false;
                    linkEnabledFourth = false;
                    header.style.backgroundColor = '';
                    
    });
});




/*=== FINGER TAP ===*/
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




/*=====WORDBULLET END======*/
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
    if (mediaQuery.matches) {
        // wordMind.style.top = '';
        // wordSwym.style.top = '';
        // wordFitness.style.top = '';
        // wordEvent.style.top = '';
    } else{
    wordMind.style.top = '0em';
    wordSwym.style.top = '0.7em';
    wordFitness.style.top = '1.4em';
    wordEvent.style.top = '2.1em';
    }


    let topPosition = '0em';
    let middlePosition1 = '0.7em';
    let middlePosition2 = '1.4em'; /*use this value to take the word back to its original spot even after klicking the back button*/
    let bottomPosition = '2.1em';

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
        wordMind.style.fontWeight = '';
        wordSwym.style.fontWeight = '';
        wordFitness.style.fontWeight = '';
        wordEvent.style.fontweight = '';
    }
});
/*===== WORDBULLET END =======*/




/*navbar start*/
// const toggler = document.querySelector('.menu__toggler');
// const menu    = document.querySelector('.menu');

// /*
//  * Toggles on and off the 'active' class on the menu
//  * and the toggler button.
//  */
// toggler.addEventListener('click', () => {
//   toggler.classList.toggle('active');
//   menu.classList.toggle('active');
// })











// DROPDOWNNAVBAR
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 // 1. Select each dropdown item
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     // 2. Select each button click
     dropdownButton.addEventListener('click', () =>{
         // 7. Select the current show-dropdown class
         const showDropdown = document.querySelector('.show-dropdown')
         
         // 5. Call the toggleItem function
         toggleItem(item)
 
         // 8. Remove the show-dropdown class from other items
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 
 // 3. Create a function to display the dropdown
 const toggleItem = (item) =>{
     // 3.1. Select each dropdown content
     const dropdownContainer = item.querySelector('.dropdown__container')
 
     // 6. If the same item contains the show-dropdown class, remove
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         // 4. Add the maximum height to the dropdown content and add the show-dropdown class
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== DELETE DROPDOWN STYLES ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 // Function to remove dropdown styles in mobile mode when browser resizes
 const removeStyle = () =>{
     // Validate if the media query reaches 1118px
     if(mediaQuery.matches){
         // Remove the dropdown container height style
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         // Remove the show-dropdown class from dropdown item
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)
 