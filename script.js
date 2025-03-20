let key

async function fetchKey() {
    const response = await fetch('key_api.txt')
    const data = await response.text()
    key = data
}

fetchKey()

function exibirDados(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp_min").innerHTML = Math.floor(dados.main.temp_min) + "°C Mín"
    document.querySelector(".temp_max").innerHTML = Math.floor(dados.main.temp_max) + "°C Máx"
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    exibirDados(dados)
}

function clique() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}