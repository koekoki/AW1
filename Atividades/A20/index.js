

//IMPLEMENTAÇÃO DA SEGUNDA API DO RICK AND MORTY


const doc = document.querySelector('#api2')
axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(({ data: { results } }) => {
        const html = results.map(
            item =>
            `
            <div class = 'mt-5'> <img class = 'rounded-circle' src =`+ item.image + `  > <h4 class='text-center text-white'>`+ item.name +`  </h4> </div>
            `
        )
        doc.innerHTML = html.join('')
    })
    .catch(error => console.log(error))



var x, i;
x = document.querySelectorAll('label')
for (i = 0; i < x.length; i++) {
  x[i].classList.add("text-white")
}