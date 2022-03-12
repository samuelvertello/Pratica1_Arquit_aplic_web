var fs = require('fs');
const lista = require('../routes/lista');

function lista() {}

lista.prototype.getLista = function(callback) {
    fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
       var dados = [];
       
       if(!err) {

        var obj = JSON.parse(result);
        var i = 0;

        obj.bancos.forEach(function(bancos) {
            if (i>= 0) {
                dados[i] = bancos;
                i++;
            }
            
        });
       }
       callback(err, dados);
    });
};

module.exports = function(){
    return lista;
}