// ----------menu------------


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// ---------------------------counter-down--------------------------------

function counter(element, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener('DOMContentLoaded', function () {
    const approvedPhotos = document.getElementById('approved-photos');
    const guarantee = document.getElementById('guarantee');

    counter(approvedPhotos, 0, 1000000, 1000); 
    counter(guarantee, 0, 200, 30000); 
});

// validation.js

function validateForm() {
    const country = document.getElementById('country').value;
    const docSize = document.getElementById('docSize').value;
    const errorMessage = document.getElementById('errorMessage');

    if (country === 'Zimbabwe' && docSize === 'passportin2by2') {
        // Redirect to the next page
        window.location.href = 'step2.html'; // Change this to the actual next page URL
    } else {
        errorMessage.textContent = 'Incorrect country or document size. Please try again.';
    }
}


