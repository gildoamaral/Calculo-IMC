//peso * altura / alura

function imc() {
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const calculo = document.querySelector('.calculo');
    
    

    function play(evento) {
        evento.preventDefault();
        const a = parseFloat(peso.value);
        const b = parseFloat(altura.value);
        const resultado = a / (b ** 2);

        let teste 

        if (isNaN(a) === true && isNaN(b) === true) {
            calculo.style.backgroundColor = "rgb(241, 89, 89)";
            calculo.innerHTML = `Peso e Altura inválidos`;
        } else if (isNaN(a)) {
            calculo.style.backgroundColor = "rgb(241, 89, 89)";
            calculo.innerHTML = `Peso Inválido`;
        } else if (isNaN(b)) {
            calculo.style.backgroundColor = "rgb(241, 89, 89)";
            calculo.innerHTML = `Altura Inválida`;
        } else if (resultado <= 18.5) {
            calculo.style.backgroundColor = "rgb(181, 230, 84)";
            calculo.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Abaixo do peso)`;
        } else if (resultado > 18.5 && resultado <= 24.9) {
            calculo.style.backgroundColor = "rgb(181, 230, 84)";
            calculo.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Peso normal)`;
        } else if (resultado >= 25 && resultado <= 29.9) {
            calculo.style.backgroundColor = "rgb(181, 230, 84)";
            calculo.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Sobrepeso)`;
        } else if (resultado >= 30 && resultado <= 34.9) {
            calculo.style.backgroundColor = "rgb(181, 230, 84)";
            calculo.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 1)`;
        } else if (resultado >= 35 && resultado <= 39.9) {
            calculo.style.backgroundColor = "rgb(181, 230, 84)";
            calculo.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 2)`;
        } else if (resultado >= 40 && resultado <= 100) {
            calculo.style.backgroundColor = "rgb(181, 230, 84)";
            calculo.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 3)`;
        } else {
            calculo.style.backgroundColor = "rgb(241, 89, 89)";
            calculo.innerHTML = `Resultado Inconsistente`
        }

    }

    addEventListener('submit', play);
}

imc();

// deu um trabalho, mas fiz tudo por conta própria. O do professor, pelo visto, ficou completamente diferente
