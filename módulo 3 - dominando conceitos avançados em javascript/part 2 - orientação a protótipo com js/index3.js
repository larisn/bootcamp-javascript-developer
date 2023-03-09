
String.prototype.toPLang = function() {
    return `P ${this}`;
} // não é muito recomendado aplicar em projetos reais porque se tiver problema no método do protótipo, toda a cadeia de strings dão problema.

console.log('teste'. toPLang());