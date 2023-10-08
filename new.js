

<script>
    document.addEventListener('DOMContentLoaded', function() {
    const firstElement = document.getElementById("first");
    const secondElement = document.getElementById("second");
    const thirdElement = document.getElementById("third");
    const backElement = document.getElementById("back");
    const backgroundElement = document.getElementById("background");

    const mediaQuery = window.matchMedia("(min-width: 786px)");

    firstElement.addEventListener('click', function() {
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
        }
        backgroundElement.style.setProperty('--scale', '1.5');
    });

    secondElement.addEventListener('click', function() {
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
        }
        backgroundElement.style.setProperty('--scale', '1.5');
    });

    thirdElement.addEventListener('click', function() {
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
        }
        backgroundElement.style.setProperty('--scale', '1.5');
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
        } else {
            firstElement.style.top = '25vh';
            firstElement.style.transform = 'translateY(-50%) scale(1)';
            firstElement.style.display = 'block';
            secondElement.style.transform = 'translateY(-50%) scale(1)';
            secondElement.style.display = 'block';
            thirdElement.style.top = '75vh';
            thirdElement.style.transform = 'translateY(-50%) scale(1)';
            thirdElement.style.display = 'block';
        }
        backgroundElement.style.setProperty('--scale', '1');
    });
});



</script>
