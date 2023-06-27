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
    const respost = document.getElementById('response');
    respost.classList.add('active');
    const conversao = Math.round((inputResult * 9/5) + 32);
    respost.innerHTML = `<p>A temperatura ${inputResult}C° informada é igual a ${conversao}°F</p>`
}

function fahrenheitForCelsius(inputResult) {
    const respost = document.getElementById('response');
    respost.classList.add('active');
    const conversao =  Math.round((inputResult - 32) * 5/9);
    respost.innerHTML = `<p>A temperatura ${inputResult}°F informada é igual a ${conversao}C°</p>`
}

function celsiusForKelvin(inputResult) {
    const respost = document.getElementById('response');
    respost.classList.add('active');
    const conversao =  Math.round(inputResult + 273.15);
    respost.innerHTML = `<p>A temperatura ${inputResult}C° informada é igual a ${conversao} K</p>`
}

function kelvinForCelsius(inputResult) {
    const respost = document.getElementById('response');
    respost.classList.add('active');
    const conversao =  Math.round(inputResult - 273.15);
    respost.innerHTML = `<p>A temperatura ${inputResult} K informada é igual a ${conversao}C°</p>`
}

function fahrenheitForKelvin(inputResult) {
    const respost = document.getElementById('response');
    respost.classList.add('active');
    const conversao =  Math.round((inputResult - 32) * 5/9 + 273.15);
    respost.innerHTML  = `<p>A temperatura ${inputResult}°F informada é igual a ${conversao} K</p>`
}

function kelvinForFahrenheit(inputResult) {
    const respost = document.getElementById('response');
    respost.classList.add('active');
    const conversao =  Math.round((inputResult - 273.15) * 9/5 + 32);
    respost.innerHTML = `<p>A temperatura ${inputResult} K informada é igual a ${conversao}°F</p>`
}}