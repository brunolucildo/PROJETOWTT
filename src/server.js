const app = require('./app');
const { Usuario } = require('./app/models');

Usuario.create({
    nome: 'Usuario1', 
    email:'usuario1@email.com', 
    senha_hash:'123456'
});

app.listen(process.env.PORT || 3000);

