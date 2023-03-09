
const promessaNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
    resolve(numero)
    }, 1000) 
})

console.log('Deu certo!')

promessaNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => { //quando da erro
        console.log(error)
    })
    .finally(() => {
        console.log('Finalizou!')
    })

