'use strict'

const pesquisaCep = async() =>{
    const cep =  document.getElementById('Cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    //fetch(url).then(response => response.json()).then(console.log)
    const searchAddress = await fetch(url)
    const data = await searchAddress.json();
    preencherFormulario(data)
}

const preencherFormulario = (data) =>{
    document.getElementById('Bairro').value = data.bairro
    document.getElementById('Logradouro').value = data.logradouro
    document.getElementById('UF').value = data.uf
    document.getElementById('Estado').value = data.localidade
}

document.getElementById("Cep").addEventListener('focusout',pesquisaCep)

//IMPLEMENTAÇÃO DA SEGUNDA API DO RICK AND MORTY

fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(response => response.json())
.then(function(json){

    const doc = document.querySelector('#api2')

    json.results.map(function(results){

        doc.innerHTML+=`
        <div class = 'mt-5'> <img class = 'rounded-circle' src =`+ results.image + `  > <h4 class='text-center text-white'>`+ results.name +`  </h4> </div>
        `;
         
    })

})


var x, i;
x = document.querySelectorAll('label')
for (i = 0; i < x.length; i++) {
  x[i].classList.add("text-white")
}