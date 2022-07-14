let ageValue = document.getElementById('ageValue');
let ageInput = document.getElementById('ageInp')

ageInput.addEventListener('input', function () {
    ageValue.innerHTML = ageInput.value;
})