const formulario = document.getElementById("formulario")

function calcularImc(peso, altura) {
    return (peso/ (altura ** 2).toFixed(1))
}

function classificar(imc) {

    let classificacao = ''

    if (imc < 18.5){
        classificacao = 'abaixo do peso. Alimente-se melhor!';
    }else if (imc < 25) {
        (classificacao = 'com o peso ideal pra você.<span class= "green">Parabéns!</span>')
      
    }else if (imc < 30){
        classificacao = 'levemente acima do peso. Atenção!';
    }else if (imc < 35){
        classificacao = 'com obesidade grau I. Se cuide!';
    }else if (imc < 40){
        classificacao = 'com obesidade grau II. Se cuide!';
    }else {
        (classificacao = 'com obesidade grau III. <span class="red"> Cuidado!!!</span>')
        resultado.classList.add('red');
    }

    return classificacao
}

function camposValidos () {
    return document.querySelector('form').reportValidity()
}
function exibirResultado() {

    const resultado = document.getElementById('resultado')
    const nome = document.getElementById('nome').value
    const peso = parseFloat(document.getElementById('peso').value.replace(',' , '.'))
    const altura = parseFloat(document.getElementById('altura').value.replace(',' , '.'))
    

    if (camposValidos()) {
    const imc = calcularImc (peso, altura)
    const classificacao = classificar(imc)


    resultado.innerHTML = `${nome} seu IMC é ${imc.toString().replace('.' , ',')} e você está ${classificacao}`
     }else {
         resultado.textContent = 'Preencha todos os campos!'
     }
}

//capturando o Enter
function capturarEnter(event) {
    if (event.key == "Enter") {
        exibirResultado()
    }
}


//eventos
document.getElementById('calcular').addEventListener('click', exibirResultado)
document.querySelector('form').addEventListener('keypress', capturarEnter)