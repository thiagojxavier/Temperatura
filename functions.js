function converter() {
    const formSelecao = document.getElementById('form-selected');
    const selectedValue = formSelecao.conversao.value;
    const inputSelecting = document.getElementById('temp');
    const inputValue = Number(inputSelecting.value);
    switch (selectedValue) {
    case 'c-f':
        celsiusForFahrenheit(inputValue);
        break;
    case 'f-c':
        fahrenheitForCelsius(inputValue);
        break;
    case 'c-k':
        celsiusForKelvin(inputValue);
        break;
    case 'k-c':
        kelvinForCelsius(inputValue);
        break;
    case'f-k':
        fahrenheitForKelvin(inputValue);
        break;
    case 'k-f':
        kelvinForFahrenheit(inputValue);
        break;
    }

function celsiusForFahrenheit(inputResult) {
    const response = document.getElementById('response');
    showResult();
    const conversao = Math.round((inputResult * 9/5) + 32);
    setTimeout(() => {
        response.innerHTML = `<p>A temperatura ${inputResult}C° informada é igual a ${conversao}°F</p>`;
    }, 100);
}

function fahrenheitForCelsius(inputResult) {
    const response = document.getElementById('response');
    showResult();
    const conversao =  Math.round((inputResult - 32) * 5/9);
    setTimeout(() => {
        response.innerHTML = `<p>A temperatura ${inputResult}°F informada é igual a ${conversao}C°</p>`;
    }, 60);
}

function celsiusForKelvin(inputResult) {
    const response = document.getElementById('response');
    showResult();
    const conversao =  Math.round(inputResult + 273.15);
    setTimeout(() => {
        response.innerHTML = `<p>A temperatura ${inputResult}C° informada é igual a ${conversao} K</p>`;
    }, 60);
}

function kelvinForCelsius(inputResult) {
    const response = document.getElementById('response');
    showResult();
    const conversao =  Math.round(inputResult - 273.15);
    setTimeout(() => {
        response.innerHTML = `<p>A temperatura ${inputResult} K informada é igual a ${conversao}C°</p>`;
    },60);
}

function fahrenheitForKelvin(inputResult) {
    const response = document.getElementById('response');
    showResult();
    const conversao =  Math.round((inputResult - 32) * 5/9 + 273.15);
    setTimeout(() => {
        response.innerHTML  = `<p>A temperatura ${inputResult}°F informada é igual a ${conversao} K</p>`;
    }, 60);
}

function kelvinForFahrenheit(inputResult) {
    const response = document.getElementById('response');
    showResult();
    const conversao =  Math.round((inputResult - 273.15) * 9/5 + 32);
    setTimeout(() => {
        response.innerHTML = `<p>A temperatura ${inputResult} K informada é igual a ${conversao}°F</p>`;
    }, 60);
}}

function showResult() {
    const response = document.getElementById('response');
    response.classList.remove('active');

    setTimeout(() => {
        response.classList.add('active');
    }, 50);
}