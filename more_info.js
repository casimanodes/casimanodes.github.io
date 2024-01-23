
// Step 1: Select the element
var moreinfo = document.getElementById('moreinfo');
const circleI = document.getElementById('function_button');
const arrow = document.getElementById('arrow_container');
const info = document.querySelector('.info');
// Step 2: Create a function that sets the width

function setWidth() {
  circleI.style.transition = 'transform 0.5s ease-in-out';
  circleI.style.transform = 'rotate(360deg)';
  moreinfo.style.width = 'calc(50svw - 1rem)';
  // moreinfo.style.opacity = '1'
  moreinfo.style.zIndex = '900';
  moreinfo.style.pointerEvents = 'auto';

  setTimeout(() => {

    arrow.style.opacity = '1';
    arrow.style.transition = 'transform 0.65s ease';
    arrow.style.transform = 'rotate(360deg)';
            }, 250);
  setTimeout(() => {
                info.style.opacity = '0';
            }, 350);
}
var intervalId = setInterval(setWidth, 1000);


    // Start the automatic toggle process with an initial delay of 3 seconds


