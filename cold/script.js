const submitButton = document.querySelector('.sub');
submitButton.addEventListener('click', updatelinks);

function updatelinks() {
    let numb = document.getElementsByClassName("inp")[0].value;

    // Assuming classes 'wha' and 'call' are on the buttons, not the anchor tags
    let whaaaelement = document.getElementsByClassName('wha')[0].getElementsByTagName('a')[0];
    let calllelement = document.getElementsByClassName('call')[0].getElementsByTagName('a')[0];

    whaaaelement.href = "https://wa.me/+91" + numb;
    calllelement.href = "tel:+91" + numb;}