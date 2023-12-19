document.addEventListener('DOMContentLoaded', function() {
    const erwachsene = document.getElementById('erwachsene');
    const firstElement = document.getElementById("first1");
    const secondElement = document.getElementById("second2");
    const thirdElement = document.getElementById("third3");
    const fourthElement = document.getElementById("fourth4");
    
    const erwTitle = document.getElementById("erwTitle");
    const firstTitle = document.getElementById("firstTitle");
    const secondTitle = document.getElementById("secondTitle");
    const thirdTitle = document.getElementById("thirdTitle");
    const fourthTitle = document.getElementById("fourthTitle");

    const disappear = document.querySelectorAll(".disappear");
    const backElement = document.getElementById("back1");
    const buchenElement = document.querySelector(".buchen");
    // const backgroundElement = document.getElementById("background");
    const clickedContainer = document.querySelectorAll(".top-leftklick, .top-rightklick, .middle-leftklick, .middle-rightklick"); 

    const mrContent = document.querySelector(".mrContent");
    const mediaQuery = window.matchMedia("(min-width: 786px)");


    /*mind/swym/fitness-content toggle*/
    // let mindcontent = document.getElementById("mind-content-container");
    // let swymcontent = document.getElementById("swym-content-container");
    // let fitnesscontent = document.getElementById("fitness-content-container");
    // let contentContainer = document.getElementById("content-container");

    const mindContent = document.querySelectorAll('.vorschule-content');
    const swymContent = document.querySelectorAll('.slk-content');
    const fitnessContent = document.querySelectorAll('.seepferd-content');
    const eventContent = document.querySelectorAll('.club-content');
    let linkEnabledFirst = false;
    let linkEnabledSecond = false;
    let linkEnabledThird = false;
    let linkEnabledFourth = false;

    const erwInnerCircle = document.querySelector('.innercircle_erw');
    const firstInnerCircle = document.querySelector('.innercircle')
    const secondInnerCircle = document.querySelector('.innercircle2')
    const thirdInnerCircle = document.querySelector('.innercircle3')
    const fourthInnerCircle = document.querySelector('.innercircle4')
    const header = document.querySelector('header');






// Step 1: Select the element
var moreinfo = document.getElementById('moreinfo');
const circleI = document.getElementById('function_button');
const circle2 = document.getElementById('arrow_container');
const info = document.querySelector('.info');
// Step 2: Create a function that sets the width

function setWidth() {
  circleI.style.transition = 'transform 0.5s ease-in-out';
  circleI.style.transform = 'rotate(360deg)';
  moreinfo.style.width = '8rem';
  moreinfo.style.opacity = '1'
  moreinfo.style.zIndex = '999';
  moreinfo.style.pointerEvents = 'auto';
// setTimeout(() => {
// }, 150);

  setTimeout(() => {

    circle2.style.opacity = '1';
    circle2.style.transition = 'transform 0.65s ease';
  circle2.style.transform = 'rotate(360deg)';
            }, 250);
  setTimeout(() => {
                info.style.opacity = '0';
            }, 350);
}



// Step 3: Call the function every 5 seconds
var intervalId = setInterval(setWidth, 5000);

// Step 4: Stop the interval after 5 seconds
setTimeout(function() {
  clearInterval(intervalId);
}, 5000);

    var autoExpandTimeout, autoContractTimeout;
    var isManuallyToggled = false;
    var firstExpansionDone = false;

    // Function to toggle the expansion of the content area
    function toggleContentArea(expand) {
        var contentArea = document.getElementById('contentArea');
        contentArea.classList.toggle('expanded', expand);
//         setTimeout(() => {
//           moreinfo.style.width = '8rem';
//         moreinfo.style.opacity = '1'
//         moreinfo.style.zIndex = '999';
//         moreinfo.style.pointerEvents = 'auto';
// },1000);

    }

    // Event listener for manual toggle by clicking the circle button
    // document.getElementById('container_expand').addEventListener('click', function() {
    //     clearTimeout(autoExpandTimeout);
    //     clearTimeout(autoContractTimeout);
    //     moreinfo.style.width = '8rem';
    //     moreinfo.style.opacity = '1'
    //     moreinfo.style.zIndex = '999';
    //     moreinfo.style.pointerEvents = 'auto';


    //     var isExpanded = document.getElementById('contentArea').classList.contains('expanded');
    //     isManuallyToggled = true; 
    //     toggleContentArea(!isExpanded);
        
    //     if (!isExpanded) {
    //         autoExpandTimeout = setTimeout(handleAutomaticToggle, 10000);
    //         moreinfo.style.width = '3rem';
    //     moreinfo.style.opacity = '0'
    //     moreinfo.style.zIndex = '0';
    //     moreinfo.style.pointerEvents = 'none';
    //     }
    // });

    // Function to handle the automatic expansion and contraction
    function handleAutomaticToggle() {
        if (!isManuallyToggled) {
            // Expand the content area
            toggleContentArea(true);
            
            // Contract the content area after 10 seconds
            autoContractTimeout = setTimeout(function() {
                toggleContentArea(false);
                moreinfo.style.width = '3rem';
                moreinfo.style.opacity = '0';
                moreinfo.style.zIndex = '0';
                moreinfo.style.pointerEvents = 'none';

                setTimeout(() => {
        circle2.style.transform = 'rotate(360deg)'; 
        circle2.style.transition = 'transform 0.65s ease';

      }, 10);


      setTimeout(() => {

        info.style.opacity = '1';
        info.style.transition = 'transform 0.65s ease';
        info.style.transform = 'rotate(360deg)';
                }, 250);

      setTimeout(() => {
        circle2.style.transform = 'rotate(360deg)'; 

        circle2.style.opacity = '0';

      }, 350);



                // Set delay for next automatic expansion
                autoExpandTimeout = setTimeout(handleAutomaticToggle, firstExpansionDone ? 10000 : 3000);
                firstExpansionDone = true;
                isManuallyToggled = false; // Reset the manual flag after automatic contraction

            }, 10000);
        }
    }

    // Start the automatic toggle process with an initial delay of 3 seconds
    autoExpandTimeout = setTimeout(handleAutomaticToggle, 3000);




    // var autoExpandTimeout, autoContractTimeout;
    // var isManuallyToggled = false;
    // var firstExpansionDone = false;

    // // Function to toggle the expansion of the content area
    // function toggleContentArea(expand) {
    //     var contentArea = document.getElementById('contentArea');
    //     contentArea.classList.toggle('expanded', expand);
    // }

    // // Event listener for manual toggle by clicking the circle button
    // document.getElementById('circleButton').addEventListener('click', function() {
    //     clearTimeout(autoExpandTimeout);
    //     clearTimeout(autoContractTimeout);

    //     var isExpanded = document.getElementById('contentArea').classList.contains('expanded');
    //     isManuallyToggled = true; // Set the flag to indicate manual toggle
    //     toggleContentArea(!isExpanded);
        
    //     // Set delay for next automatic expansion after manual contraction
    //     if (!isExpanded) {
    //         autoExpandTimeout = setTimeout(handleAutomaticToggle, 10000);
    //     }
    // });

    // // Function to handle the automatic expansion and contraction
    // function handleAutomaticToggle() {
    //     if (!isManuallyToggled) {
    //         // Expand the content area
    //         toggleContentArea(true);
            
    //         // Contract the content area after 10 seconds
    //         autoContractTimeout = setTimeout(function() {
    //             toggleContentArea(false);

    //             // Set delay for next automatic expansion
    //             autoExpandTimeout = setTimeout(handleAutomaticToggle, firstExpansionDone ? 10000 : 3000);
    //             firstExpansionDone = true;
    //             isManuallyToggled = false; // Reset the manual flag after automatic contraction
    //         }, 10000);
    //     }
    // }

    // // Start the automatic toggle process with an initial delay of 3 seconds
    // autoExpandTimeout = setTimeout(handleAutomaticToggle, 3000);

    erwachsene.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)";
            return;
        }
        if (mediaQuery.matches) {
            firstElement.style.top = '50vh';
            firstElement.style.left = "50vw";
            firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

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
            erwachsene.style.height = '100%';
            erwachsene.style.top = '50vh';
            erwachsene.style.right = '50%';
            header.style.backgroundColor = 'blue';
            linkEnabledFirst = true;
            erwachsene.style.height = '15%';
            erwTitle.style.opacity= '0';
            erwInnerCircle.style.height = '100%';
            
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Erwachsene%20-%20Schwimmlernkurs%20(Stufe%201)");
            
            
            
            
            // Passive circles
            firstElement.style.opacity = '0';
            firstElement.style.pointerEvents = 'none';

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




    // Vorschule ELEMENT

    firstElement.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)";
            return;
        }
        if (mediaQuery.matches) {
            firstElement.style.top = '50vh';
            firstElement.style.left = "50vw";
            firstElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

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
            firstElement.style.left = '50%';
            // firstElement.style.transform = 'scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;
            firstElement.style.height = '15%';
            firstTitle.style.opacity= '0';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");
            // Passive circles
            erwachsene.style.opacity = '0';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            fourthElement.style.opacity = '0';      
            erwachsene.style.pointerEvents = 'none';      
            thirdElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';

         
        
            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              
                circle2.style.opacity = '0';
                circle2.style.pointerEvents = 'none';
                circle2.style.zIndex = '0';
                circleI.style.opacity = '0';
                circleI.style.pointerEvents = 'none';
                circleI.style.zIndex = '0';
              
                moreinfo.style.opacity = '0';
                info.style.opacity = '0';
                contentArea.style.opacity = '0';
              

         
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
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)";
            return;
        }
        if (mediaQuery.matches) {
            secondElement.style.top = '50vh';
            secondElement.style.right = "50vw";
            secondElement.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

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
            
            secondElement.style.height = '15%';
            secondInnerCircle.style.height = '100%';
            secondElement.style.top = '50vh';
            secondElement.style.right = '50%';
            // secondElement.style.transform = 'translateY(-50%)';
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;
            secondTitle.style.opacity= '0';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

            // Passive circles
            erwachsene.style.opacity = '0';
            firstElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            fourthElement.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
            firstElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';


            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              
                circle2.style.opacity = '0';
                circle2.style.pointerEvents = 'none';
                circle2.style.zIndex = '0';
                circleI.style.opacity = '0';
                circleI.style.pointerEvents = 'none';
                circleI.style.zIndex = '0';
              
                moreinfo.style.opacity = '0';
                info.style.opacity = '0';
                contentArea.style.opacity = '0';


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
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Seepferdchenkurs%20(Stufe%202)";
            return;
        }
        if (mediaQuery.matches) {
            thirdElement.style.top = '50vh';
            thirdElement.style.left = "50vw";
            thirdElement.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(198, 199, 196)';
            linkEnabledThird = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Seepferdchenkurs%20(Stufe%202)");

            // PASSIVE CIRCLES
            erwachsene.style.opacity = '0';
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            fourthElement.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
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
            thirdElement.style.height = '15%';
            thirdInnerCircle.style.height = '100%';
            thirdElement.style.top = '50vh';
            thirdElement.style.left = '50%';
            header.style.backgroundColor = 'rgb(198, 199, 196)';
            linkEnabledThird = true;
            thirdTitle.style.opacity= '0';
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Seepferdchenkurs%20(Stufe%202)");

            //PASSIVE CIRCLES
            erwachsene.style.pointerEvents = 'none';
            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            fourthElement.style.pointerEvents = 'none';
            erwachsene.style.opacity = '0';
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            fourthElement.style.opacity = '0';


            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              
                circle2.style.opacity = '0';
                circle2.style.pointerEvents = 'none';
                circle2.style.zIndex = '0';
                circleI.style.opacity = '0';
                circleI.style.pointerEvents = 'none';
                circleI.style.zIndex = '0';
              
                moreinfo.style.opacity = '0';
                info.style.opacity = '0';
                contentArea.style.opacity = '0';


            fitnessContent.forEach(content => {
             content.style.display = "flex";
                });
            disappear.forEach(function(disappear) {
                disappear.style.opacity="0";
            
            });
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';

        });
        }

    });

    // EVENT ELEMENT

    fourthElement.addEventListener('click', function() {
        if (linkEnabledFourth) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmclub%20(Stufe%203)";
            return;
        }
        if (mediaQuery.matches) {
            // Event Circle
            fourthElement.style.top = '50vh';
            fourthElement.style.right = "50vw";
            fourthElement.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            linkEnabledFirst = true;
            header.style.backgroundColor = '#cc4406';
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmclub%20(Stufe%203)");


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
            fourthElement.style.height = '15%';
            fourthInnerCircle.style.height = '100%';
            fourthElement.style.top = '50vh';
            fourthElement.style.right = '50%';
            // fourthElement.style.transform = 'translateY(-50%)scale(1.5)';
            header.style.backgroundColor = '#cc4406';
            linkEnabledFourth = true;           
            fourthTitle.style.opacity= '0';
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmclub%20(Stufe%203)");

            // passive circles
            erwachsene.style.opacity = '0';
            firstElement.style.opacity = '0';
            secondElement.style.opacity = '0';
            thirdElement.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none'; 
            firstElement.style.pointerEvents = 'none';
            secondElement.style.pointerEvents = 'none';
            thirdElement.style.pointerEvents = 'none';


            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              
                circle2.style.opacity = '0';
                circle2.style.pointerEvents = 'none';
                circle2.style.zIndex = '0';
                circleI.style.opacity = '0';
                circleI.style.pointerEvents = 'none';
                circleI.style.zIndex = '0';
              
                moreinfo.style.opacity = '0';
                info.style.opacity = '0';
                contentArea.style.opacity = '0';


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
            // Inner circles
            erwInnerCircle.style.height = '';
            firstInnerCircle.style.height = '';
            secondInnerCircle.style.height = '';
            thirdInnerCircle.style.height = '';
            fourthInnerCircle.style.height = '';

            //erwachsene
            erwachsene.style.height = '';
            erwachsene.style.top = '';
            erwachsene.style.right = '';
            erwachsene.style.transform = '';
            erwachsene.style.opacity = '';
            erwachsene.style.pointerEvents = '';

            // Absolute1
            firstElement.style.height = '';
            firstElement.style.top = '';
            firstElement.style.left = '';
            firstElement.style.transform = '';
            firstElement.style.opacity = '';
            firstElement.style.pointerEvents = '';

            // Absolute2
            secondElement.style.height = '';
            secondElement.style.top ="";
            secondElement.style.right = '';
            secondElement.style.transform = '';
            secondElement.style.opacity = '';
            secondElement.style.pointerEvents = '';

            // Absolute3
            thirdElement.style.height = '';
            thirdElement.style.top = '';
            thirdElement.style.left = '';
            thirdElement.style.transform = '';
            thirdElement.style.opacity = '';
            thirdElement.style.pointerEvents = '';

            // Absolute4
            fourthElement.style.height = '';
            fourthElement.style.top = '';
            fourthElement.style.right = '';
            fourthElement.style.transform = '';
            fourthElement.style.opacity = '';
            fourthElement.style.pointerEvents = '';

            // Titles
            erwTitle.style.opacity= '1';
            firstTitle.style.opacity= '1';
            secondTitle.style.opacity= '1';
            thirdTitle.style.opacity= '1';
            fourthTitle.style.opacity= '1';


            
            backElement.style.opacity = '';
            backElement.style.pointerEvents = '';
            backElement.style.zIndex = '';
              
                circle2.style.opacity = '';
                circle2.style.pointerEvents = '';
                circle2.style.zIndex = '';
                circleI.style.opacity = '';
                circleI.style.pointerEvents = '';
                circleI.style.zIndex = '';
              
                moreinfo.style.opacity = '';
                info.style.opacity = '';
                contentArea.style.opacity = '';
              



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

                    // wordMind.style.textDecoration = "";
                    wordMind.style.fontWeight = '';
                    wordMind.style.fontSize = "";
            
                    // wordSwym.style.textDecoration = "";
                    wordSwym.style.fontWeight = '';
                    wordSwym.style.fontSize = "";
            
                    // wordFitness.style.textDecoration = "";
                    wordFitness.style.fontSize = "";
                    wordFitness.style.fontWeight = '';
            
                    wordEvent.style.fontWeight = '';
                    wordEvent.style.fontSize = "";        
                    // wordEvent.style.textDecoration = "";

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
 
