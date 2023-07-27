const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const pesoInput = evento.target.querySelector('#peso')
    const alturaInput = evento.target.querySelector('#altura');

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso) {
        setResultado('Peso invávlido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invávlida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc(imc);
    
    const msg = `Seu IMC é ${imc} (${indiceImc})`;

    setResultado(msg, true);

});

function getIndiceImc(imc) {
    const indice = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return indice[5];
    
    if (imc >= 34.9) return indice[4];
    if (imc >= 29.9) return indice[3];
    if (imc >= 24.9) return indice[2];
    if (imc >= 18.5) return indice[1];
    if (imc < 18.5) return indice[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}