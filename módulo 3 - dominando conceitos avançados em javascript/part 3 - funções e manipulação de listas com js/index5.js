
//converter um objeto de uma lista de pessoas pra uma lista de nomes 


// utilizando map

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const lista = [new Pessoa('Larissa'), new Pessoa('Lorraine'), new Pessoa('Manuela'), new Pessoa('Claudia'), new Pessoa('Jorge')];

const listaNomes = lista.map((element) => element.name);



/* (forma convencional) 

const listaNomes = []

 for (let i = 0; i < lista.length; i++) {   
    const element = lista[i];
    listaNomes.push(element.name)
} */
