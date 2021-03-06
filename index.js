'use strict'

const customExpress = require('./src/config/customExpress');
const conexao = require('./src/database/conexao');

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('Conectado com sucesso');

        const app = customExpress();
        
        app.listen(process.env.PORT || 3001, () => console.log('Servidor rodando'));
    }
});