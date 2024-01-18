
// Step 1: Select the element
var moreinfo = document.getElementById('moreinfo');
const circleI = document.getElementById('function_button');
const circle2 = document.getElementById('arrow_container');
const info = document.querySelector('.info');
// Step 2: Create a function that sets the width

function setWidth() {
  circleI.style.transition = 'transform 0.5s ease-in-out';
  circleI.style.transform = 'rotate(360deg)';
  moreinfo.style.width = 'calc(45vw - 0.5rem)';
  moreinfo.style.opacity = '1'
  moreinfo.style.zIndex = '900';
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
var intervalId = setInterval(setWidth, 4000);

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




    /* TEAM JS*/

    // document.querySelector('.team_img_container').addEventListener('mouseover', function() {
    //     document.querySelector('.team_info_extra').style.display = 'block';
    // });
    
    // document.querySelector('.hover-element').addEventListener('mouseout', function() {
    //     document.querySelector('.team_info_extra').style.display = 'none';
    // });
    
    //FIX manual toggle

    // Event listener for manual toggle by clicking the circle button
    document.getElementById('container_expand').addEventListener('click', function() {
        clearTimeout(autoExpandTimeout);
        clearTimeout(autoContractTimeout);
        moreinfo.style.width = '35vw';
        moreinfo.style.opacity = '1'
        moreinfo.style.zIndex = '999';
        moreinfo.style.pointerEvents = 'auto';


        var isExpanded = document.getElementById('contentArea').classList.contains('expanded');
        isManuallyToggled = true; 
        toggleContentArea(!isExpanded);
        
        if (!isExpanded) {
            autoExpandTimeout = setTimeout(handleAutomaticToggle, 100000);
            moreinfo.style.width = '3rem';
        moreinfo.style.opacity = '0'
        moreinfo.style.zIndex = '0';
        moreinfo.style.pointerEvents = 'none';
        }
    });

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

      }, 1000000);


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

            }, 30000);
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