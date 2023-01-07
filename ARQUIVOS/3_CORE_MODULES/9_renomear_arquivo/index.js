const fs = require('fs')
fs.rename('arquivo.txt', 'arquivo_novo.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});

//ou

fs.rename('arquivo_novo.txt', 'arquivo_novo2.txt', function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log('Arquivo renomeado!')
    }
})