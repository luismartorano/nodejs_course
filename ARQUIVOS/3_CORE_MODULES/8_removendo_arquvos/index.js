const fs = require('fs')

//fs.unlink('arquivo.txt', function (err) {
//    if (err) {
//        console.log(err)
//        return
//    }
//    console.log('Arquivo foi removido!');
//});

// ou

fs.unlink('arquivo.txt', (err) => {
    if (err) throw err;
    console.log('Arquivo foi deletado');
});