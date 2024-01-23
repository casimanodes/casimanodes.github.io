document.addEventListener('DOMContentLoaded', function() {
    const erwachsene = document.getElementById('erwachsene');
    const vorschule = document.getElementById("first1");
    const schwimmlernkurs = document.getElementById("second2");
    const seepferdchen = document.getElementById("third3");
    const clubs = document.getElementById("fourth4");
    const buchenButton = document.getElementById("buchen");
    
    const erwTitle = document.getElementById("erwTitle");
    const firstTitle = document.getElementById("firstTitle");
    const secondTitle = document.getElementById("secondTitle");
    const thirdTitle = document.getElementById("thirdTitle");
    const fourthTitle = document.getElementById("fourthTitle");

    // const disappear = document.querySelectorAll(".disappear");
    const backElement = document.getElementById("back1");
    const buchenElement = document.getElementById("buchen");
    const lptitle = document.querySelector(".lp-title");
    // const backgroundElement = document.getElementById("background");
    const clickedContainer = document.querySelectorAll(".top-leftklick, .top-rightklick, .middle-leftklick, .middle-rightklick"); 

    // const mrContent = document.querySelector(".mrContent");
    const mediaQuery = window.matchMedia("(min-width: 786px)");


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

    // Info container
    const info_container = document.getElementById('container_expand');
    const more_info = document.getElementById('moreinfo');

    var isExpanded = false; // Flag to track the toggle state

    document.getElementById("more_team").addEventListener("click", function() {
        var element = document.querySelector(".team");
        var team_button = document.getElementById("team_button");
    
        if (!isExpanded) {
            // Expand the element
            element.style.height = "200vh ";
            team_button.innerHTML = "Weniger anzeigen";
            isExpanded = true; // Update the state
        } else {
            // Collapse the element
            element.style.height = "calc(100vh + 3.5rem)";
            team_button.innerHTML = "Weitere Team Mitglieder";
            isExpanded = false; // Update the state
        }
    });
    

    erwachsene.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)";
            return;
        }
        if (mediaQuery.matches) {
            erwachsene.style.top = 'calc(35vh + 5rem)';
            erwachsene.style.right = "50vw";
            erwachsene.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");
            // PASSIVE CIRCLES
            vorschule.style.opacity = '0';
            schwimmlernkurs.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            clubs.style.opacity = '0';
            linkEnabledFirst = true;
            vorschule.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            seepferdchen.style.pointerEvents = 'none';  
            clubs.style.pointerEvents = 'none';

            // Zoom Container content Visible
            mindContent.forEach(content => {
             content.style.display = "flex";
                });
                // Zoom container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            pointerEvents = 'auto';
        });

        } else {
            erwachsene.style.top = 'calc(50vh - 9.5rem)';
            erwachsene.style.right = '50%';
            header.style.backgroundColor = 'blue';
            linkEnabledFirst = true;
            erwachsene.style.height = '15%';
            erwTitle.style.opacity= '0';
            lptitle.style.opacity = '0';
            // erwInnerCircle.style.height = '100%';
            buchenButton.style.opacity = '1';
            buchenElement.style.width = 'calc(100svw - 4.5rem)';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Erwachsene%20-%20Schwimmlernkurs%20(Stufe%201)");
            
            
            
            
            // Passive circles
            vorschule.style.opacity = '0';
            vorschule.style.pointerEvents = 'none';

            schwimmlernkurs.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            clubs.style.opacity = '0';            
            seepferdchen.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            clubs.style.pointerEvents = 'none';

            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              

              
                info_container.style.opacity= '0';
                more_info.style.opacity = '0';

            // Zoom content Container Visible
            clickedContainer.forEach(function(container) {
                container.style.transform = 'scale(1)';
                container.style.visibility = 'visible';  
            pointerEvents = 'auto';

            });

            // Zoom Content disappear
            // disappear.forEach(function(disappear) {
            //     disappear.style.opacity="0";
            
            // });
            // Zoom Content klicked element Appear
            mindContent.forEach(content => {
             content.style.display = "flex";
                });
        }


    });




    // Vorschule ELEMENT

    vorschule.addEventListener('click', function() {
        if (linkEnabledFirst) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)";
            return;
        }
        if (mediaQuery.matches) {
            vorschule.style.top = '50vh';
            vorschule.style.left = "50vw";
            vorschule.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

            // PASSIVE CIRCLES
            erwachsene.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
            schwimmlernkurs.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            clubs.style.opacity = '0';
            linkEnabledFirst = true;
            schwimmlernkurs.style.pointerEvents = 'none';
            seepferdchen.style.pointerEvents = 'none';  
            clubs.style.pointerEvents = 'none';

            // Zoom Container content Visible
            mindContent.forEach(content => {
             content.style.display = "flex";
                });
                // Zoom container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            // pointerEvents = 'auto';

        });

        } else {
            firstInnerCircle.style.height = '100%';
            vorschule.style.top = 'calc(50vh - 9.5rem)';
            vorschule.style.right = '50%';
            // vorschule.style.transform = 'scale(1.5)';
            header.style.backgroundColor = 'rgb(246, 177, 166)';
            linkEnabledFirst = true;
            vorschule.style.height = '15%';
            firstTitle.style.opacity= '0';
            lptitle.style.opacity = '0';

            buchenButton.style.opacity = '1';
            buchenElement.style.width = 'calc(100svw - 4.5rem)';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");
            // Passive circles
            erwachsene.style.opacity = '0';
            schwimmlernkurs.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            clubs.style.opacity = '0';      
            erwachsene.style.pointerEvents = 'none';      
            seepferdchen.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            clubs.style.pointerEvents = 'none';

         
        
            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              

                info_container.style.opacity= '0';
                more_info.style.opacity = '0';
         
            // Zoom content Container Visible
            clickedContainer.forEach(function(container) {
                container.style.transform = 'scale(1)';
                container.style.visibility = 'visible';    
            // pointerEvents = 'auto';

            });

            // Zoom Content disappear
            // disappear.forEach(function(disappear) {
            //     disappear.style.opacity="0";
            
            // });
            // Zoom Content klicked element Appear
            mindContent.forEach(content => {
             content.style.display = "flex";
                });
        }


    });

    // SWYM ELEMENT 

    schwimmlernkurs.addEventListener('click', function() {
        if (linkEnabledSecond) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)";
            return;
        }
        if (mediaQuery.matches) {
            schwimmlernkurs.style.top = '50vh';
            schwimmlernkurs.style.right = "50vw";
            schwimmlernkurs.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

            // PASSIVE CIRCLES
            erwachsene.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
            vorschule.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            clubs.style.opacity = '0';

            vorschule.style.pointerEvents = 'none';
            seepferdchen.style.pointerEvents = 'none';
            clubs.style.pointerEvents = 'none';

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
            
            schwimmlernkurs.style.height = '15%';
            secondInnerCircle.style.height = '100%';
            schwimmlernkurs.style.top = 'calc(50vh - 9.5rem)';
            schwimmlernkurs.style.left = '50%';
            // schwimmlernkurs.style.transform = 'translateY(-50%)';
            header.style.backgroundColor = 'rgb(0, 125, 195)';
            linkEnabledSecond = true;
            secondTitle.style.opacity= '0';
            lptitle.style.opacity = '0';

            buchenButton.style.opacity = '1';
            buchenElement.style.width = 'calc(100svw - 4.5rem)';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmlernkurse%2f-vorschule%20(Stufe%201)");

            // Passive circles
            erwachsene.style.opacity = '0';
            vorschule.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            clubs.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
            vorschule.style.pointerEvents = 'none';
            seepferdchen.style.pointerEvents = 'none';
            clubs.style.pointerEvents = 'none';


            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              
              
                info_container.style.opacity= '0';
                more_info.style.opacity = '0';

            // Zoom Content Conainter Appear
            clickedContainer.forEach(function(container) {
                container.style.transform = 'scale(1)';
                container.style.visibility = 'visible';
            });

            // Zoom Content disappear
            // disappear.forEach(function(disappear) {
            //     disappear.style.opacity="0";
            // });
            // Zoom content Klicked element appear
            swymContent.forEach(content => {
            content.style.display = "flex";
            });
        }
    });

    // FITNESS ELEMENT

    seepferdchen.addEventListener('click', function() {
        if (linkEnabledThird) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Seepferdchenkurs%20(Stufe%202)";
            return;
        }
        if (mediaQuery.matches) {
            seepferdchen.style.top = '50vh';
            seepferdchen.style.left = "50vw";
            seepferdchen.style.transform = 'translateX(-50%)translateY(-50%)scale(1.5)';
            header.style.backgroundColor = 'rgb(198, 199, 196)';
            linkEnabledThird = true;
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Seepferdchenkurs%20(Stufe%202)");

            // PASSIVE CIRCLES
            
            erwachsene.style.opacity = '0';
            vorschule.style.opacity = '0';
            schwimmlernkurs.style.opacity = '0';
            clubs.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
            vorschule.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            clubs.style.pointerEvents = 'none';

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
            seepferdchen.style.height = '15%';
            thirdInnerCircle.style.height = '100%';
            seepferdchen.style.top = 'calc(50vh - 9.5rem)';
            seepferdchen.style.right = '50%';
            header.style.backgroundColor = 'rgb(198, 199, 196)';
            linkEnabledThird = true;
            thirdTitle.style.opacity= '0';
            lptitle.style.opacity = '0';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Seepferdchenkurs%20(Stufe%202)");
            buchenButton.style.opacity = '1';
            buchenElement.style.width = 'calc(100svw - 4.5rem)';

            //PASSIVE CIRCLES
            erwachsene.style.pointerEvents = 'none';
            vorschule.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            clubs.style.pointerEvents = 'none';
            erwachsene.style.opacity = '0';
            vorschule.style.opacity = '0';
            schwimmlernkurs.style.opacity = '0';
            clubs.style.opacity = '0';


            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              

              
                info_container.style.opacity= '0';
                more_info.style.opacity = '0';

            fitnessContent.forEach(content => {
             content.style.display = "flex";
                });
            // disappear.forEach(function(disappear) {
            //     disappear.style.opacity="0";
            
            // });
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';

        });
        }

    });

    // EVENT ELEMENT

    clubs.addEventListener('click', function() {
        if (linkEnabledFourth) {
            window.location.href = "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmclub%20(Stufe%203)";
            return;
        }
        if (mediaQuery.matches) {
            // Event Circle
            clubs.style.top = '50vh';
            clubs.style.right = "50vw";
            clubs.style.transform = 'translateX(50%)translateY(-50%)scale(1.5)';
            linkEnabledFirst = true;
            header.style.backgroundColor = '#cc4406';
            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmclub%20(Stufe%203)");


            // PASSIVE CIRCLES
            erwachsene.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none';
            vorschule.style.opacity = '0';
            schwimmlernkurs.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            vorschule.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            seepferdchen.style.pointerEvents = 'none';

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
            clubs.style.height = '15%';
            fourthInnerCircle.style.height = '100%';
            clubs.style.top = 'calc(50vh - 9.5rem)';
            clubs.style.left = '50%';
            // clubs.style.transform = 'translateY(-50%)scale(1.5)';
            header.style.backgroundColor = '#cc4406';
            linkEnabledFourth = true;           
            fourthTitle.style.opacity= '0';
            lptitle.style.opacity = '0';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kinder%20-%20Schwimmclub%20(Stufe%203)");
            buchenButton.style.opacity = '1';
            buchenElement.style.width = 'calc(100svw - 4.5rem)';

            // passive circles
            erwachsene.style.opacity = '0';
            vorschule.style.opacity = '0';
            schwimmlernkurs.style.opacity = '0';
            seepferdchen.style.opacity = '0';
            erwachsene.style.pointerEvents = 'none'; 
            vorschule.style.pointerEvents = 'none';
            schwimmlernkurs.style.pointerEvents = 'none';
            seepferdchen.style.pointerEvents = 'none';


            backElement.style.opacity = '1';
            backElement.style.pointerEvents = 'auto';
            backElement.style.zIndex = '901';
              

              
                info_container.style.opacity= '0';
                more_info.style.opacity = '0';

            // Zoom clicked container visible
            clickedContainer.forEach(function(container) {
            container.style.transform = 'scale(1)';
            container.style.visibility = 'visible';
            
            // Zoom content Container passive content disappear
            // disappear.forEach(function(disappear) {
            //     disappear.style.opacity="0";
            
            // });
            // Zoom content container klicked element visible
            eventContent.forEach(content => {
             content.style.display = "flex";
                });

        });}
    });

            // ZURÜCK BUTTON

            backElement.addEventListener('click', function() {
        
        if (mediaQuery.matches) {
            //erwachsene Circle
            erwachsene.style.top = '';
            erwachsene.style.right = '';
            erwachsene.style.transform = '';
            erwachsene.style.opacity = '';
            erwachsene.style.pointerEvents = '';
            



            // Mind Circle
            vorschule.style.top = '';
            vorschule.style.left = '';
            vorschule.style.transform = '';
            vorschule.style.opacity = '';
            vorschule.style.pointerEvents = '';


            // Swym Circle
            schwimmlernkurs.style.top = '';
            schwimmlernkurs.style.right = '';
            schwimmlernkurs.style.transform = '';
            schwimmlernkurs.style.opacity = '';
            schwimmlernkurs.style.pointerEvents = '';

            // Fitness Circle
            seepferdchen.style.top = '';
            seepferdchen.style.left = '';
            seepferdchen.style.transform = '';
            seepferdchen.style.opacity = '';
            seepferdchen.style.pointerEvents = '';

            // Event Circle
            clubs.style.top = '';
            clubs.style.right = '';
            clubs.style.transform = '';
            clubs.style.opacity = '';
            clubs.style.pointerEvents = '';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kategorie");
            



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
            buchenButton.style.opacity = '';

            //erwachsene
            erwachsene.style.height = '';
            erwachsene.style.top = '';
            erwachsene.style.right = '';
            erwachsene.style.transform = '';
            erwachsene.style.opacity = '';
            erwachsene.style.pointerEvents = '';

            // Absolute1
            vorschule.style.height = '';
            vorschule.style.top = '';
            vorschule.style.right = '';
            vorschule.style.transform = '';
            vorschule.style.opacity = '';
            vorschule.style.pointerEvents = '';

            // Absolute2
            schwimmlernkurs.style.height = '';
            schwimmlernkurs.style.top ="";
            schwimmlernkurs.style.left = '';
            schwimmlernkurs.style.transform = '';
            schwimmlernkurs.style.opacity = '';
            schwimmlernkurs.style.pointerEvents = '';

            // Absolute3
            seepferdchen.style.height = '';
            seepferdchen.style.top = '';
            seepferdchen.style.right = '';
            seepferdchen.style.transform = '';
            seepferdchen.style.opacity = '';
            seepferdchen.style.pointerEvents = '';

            // Absolute4
            clubs.style.height = '';
            clubs.style.top = '';
            clubs.style.left = '';
            clubs.style.transform = '';
            clubs.style.opacity = '';
            clubs.style.pointerEvents = '';

            // Titles
            erwTitle.style.opacity= '1';
            firstTitle.style.opacity= '1';
            secondTitle.style.opacity= '1';
            thirdTitle.style.opacity= '1';
            fourthTitle.style.opacity= '1';

            buchenElement.setAttribute("href", "https://www.swym-hamburg.de/kursuebersicht.html#/Kategorie");
            buchenElement.style.width = '';


            
            backElement.style.opacity = '';
            backElement.style.pointerEvents = '';
            backElement.style.zIndex = '';
            lptitle.style.opacity = '';
              
            info_container.style.opacity = '';
            more_info.style.opacity = '';

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
            setTimeout(function() {
                container.style.visibility = 'hidden';;
            }, 500);

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
 
