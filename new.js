
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

